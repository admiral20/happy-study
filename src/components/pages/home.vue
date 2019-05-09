<template>
    <div
        id="headLine"
        class="home"
    >
        <div ref="headLineChild">
            <header>
                {{ form.title }}
            </header>
            <section>
                <time>{{ form.publishTime }}</time>
                <span
                    v-if="form.author"
                    class="author"
                >{{ form.author }}</span>
                <img
                    v-if="form.viewsCount"
                    src="../../../static/images/icon_viewCount_m.png"
                >
                <span v-if="form.viewsCount">{{ form.viewsCount }}</span>
            </section>
            <div
                v-if="form.contentImg"
                class="content"
            >
                <img
                    v-lazy="form.contentImg"
                    class="contentImg"
                >
            </div>
            <div
                class="artical"
                v-html="form.content"
            />
        </div>
        <div
            v-if="form.comments && form.comments.length"
            ref="answerBox"
            class="answer-box"
        >
            <div
                v-if="form.comments && form.comments.length"
                class="all-answer"
            >
                <p>评论<span>{{ form.commentCount?'('+ form.commentCount+')':'' }}</span></p>
                <ul class="answer-ul">
                    <li
                        v-for="(item,index) in form.comments"
                        :key="index"
                    >
                        <ol>
                            <li class="headPortrait">
                                <img
                                    v-lazy="item.headUrl? item.headUrl : item.userType == 1 ? '../../../static/images/icon_owner.png' : item.userType == 0 ? '../../../static/images/icon_cargo.png' : '../../../static/images/icon_other.png'"
                                >
                                <img
                                    v-if="item.vipStatus == 1"
                                    src="../../../static/images/icon_v.png"
                                >
                            </li>
                            <li>
                                <p class="role-font clearfixed">
                                    <span class="nickName">{{ item.nickName }}</span>
                                    <span
                                        v-if="item.socailManagerType || item.userType == 1 || item.userType == 0"
                                        :class="item.socailManagerType == 1 ? 'isSocailManagerType': item.userType !=2? 'noSocailManagerType': null "
                                        class="nickSf"
                                    >
                                        {{ item.socailManagerType == 1? '官方账号': item.userType == 1 ? '船东' :item.userType == 0 ? '货主' : null }}
                                    </span>
                                </p>
                                <p
                                    v-if="!item.commentedNickName"
                                    class="reply-font"
                                >
                                    {{ item.content }}
                                </p>
                                <p
                                    v-else
                                    class="reply-font"
                                >
                                    回复 <span> {{ item.commentedNickName }}： </span> {{ item.content }}
                                </p>
                                <p class="answer-foot clearfixed">
                                    <label class="date-btn">{{ formatTime.formatTime(item.createTime) }}</label>
                                    <span
                                        class="reply-btn"
                                    >回复</span>
                                    <span>
                                        <i
                                            :class="item.praised? 'praiseCountStyle' : 'noPraiseCountStyle'"
                                        />{{ item.praiseCount }}
                                    </span>
                                </p>
                            </li>
                        </ol>
                    </li>
                </ul>
            </div>
            <div
                v-if="form.commentCount==0"
                class="noComment"
            >
                当前没有评论，快抢沙发
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import formatTime from '../../utill/formatTime.js'
    import CONST_REQUEST from '../../constants/request'
    export default {
        data () {
            return {
                CONST_REQUEST,
                formatTime
            }
        },
        computed: {
            ...mapGetters('home', ['headLineList', 'headLineListStatus', 'headDetails', 'headDetailStatus']),
            loading () {
                return this.headDetailStatus.code === CONST_REQUEST.LOADING
            },
            failure () {
                return this.headDetailStatus.code === CONST_REQUEST.FAILURE
            },
            failureMsg () {
                return this.headDetailStatus.msg
            },
            form () {
                if (this.headDetails) {
                    return this.headDetails
                } else {
                    return false
                }
            }
        },
        mounted () {
            document.cookie = 'token=;path=/'
            // this.getquery({ channelId: 99, pageSize: 10 })
            this.getHeadDetail({ id: 75 })
        },
        methods: {
            ...mapActions('home', ['getquery', 'getHeadDetail'])
        },
    }
</script>
<style lang="less" scoped>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

#headLine {
    background: #fff;
    padding: 5px 0 0;
    width: 100%;

    header {
        font-size: 18px;
        font-weight: bold;
        line-height: 30px;
        margin: -6px 0 5px;
        padding: 10px 20px;
    }

    section {
        align-items: center;
        color: #666;
        display: flex;
        font-size: 12px;
        height: 20px;
        line-height: 20px;
        margin-bottom: 10px;
        padding: 0 20px;

        .author {
            flex: 1;
            margin-left: 15px;
            margin-right: 5px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 200px;
        }

        & > i {
            line-height: 20px;
        }

        img {
            height: 13px;
            margin-right: 5px;
            width: 15px;
        }
    }

    .content {
        padding: 0 20px;
        width: 100%;

        .contentImg {
            border-radius: 10px;
            width: 100%;
        }
    }

    .artical {
        background: #fff;
        padding: 0 20px;
        width: 100%;
    }

    .answer-box {
        background: #fff;
        margin-top: 10px;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
        width: 100%;

        .all-answer {
            background: #fff;
            margin-top: 10px;
            padding-left: 20px;

            & > p {
                border-bottom: 1px solid #ddd;
                font-size: 14px;
                line-height: 50px;
                text-align: left;
            }

            .answer-ul {
                li {
                    ol {
                        display: flex;
                        padding: 20px 0 0;

                        & > li {
                            p {
                                line-height: 25px;
                            }

                            .reply-font {
                                color: #333;
                                font-size: 15px;
                                word-break: break-all;
                                word-wrap: break-word;

                                span {
                                    font-weight: bolder;
                                }
                            }

                            .role-font {
                                // height: 23px;
                                height: auto;
                                line-height: 23px;

                                .nickName {
                                    color: #333;
                                    font-size: 17px;
                                    font-weight: bolder;
                                    margin-right: 5px;
                                }

                                .nickSf {
                                    border-radius: 4px;
                                    color: #fff;
                                    display: inline-block;
                                    font-size: 12px;
                                    letter-spacing: 0;
                                    line-height: 18px;
                                    padding: 0 5px;
                                    vertical-align: text-top;
                                }

                                .isSocailManagerType {
                                    background: #ee7c0c;
                                }

                                .noSocailManagerType {
                                    background: #0062fd;
                                }
                            }

                            .answer-foot {
                                font-size: 12px;
                                margin-top: 10px;
                                width: 100%;

                                .date-btn {
                                    color: #666;
                                }

                                span:last-child {
                                    display: flex;
                                    float: right;
                                }

                                .reply-btn {
                                    color: #0062fd;
                                    display: inline-block;
                                    text-align: right;
                                    width: 35px;
                                }

                                .praiseCountStyle {
                                    background: url(../../../static/images/icon_g2_m.png) no-repeat;
                                    background-size: 85%;
                                    height: 25px;
                                    line-height: 25px;
                                    width: 20px;
                                }

                                .noPraiseCountStyle {
                                    background: url(../../../static/images/icon_g_m.png) no-repeat;
                                    background-size: 85%;
                                    height: 25px;
                                    line-height: 25px;
                                    width: 20px;
                                }
                            }
                        }

                        & > li:nth-child(2) {
                            border-bottom: 1px solid #ddd;
                            box-sizing: border-box;
                            flex: 1;
                            padding-bottom: 20px;
                            padding-right: 30px;
                            text-align: left;

                            i {
                                display: inline-block;
                                font-size: 15px;
                                width: 20px;
                            }
                        }

                        .headPortrait {
                            height: 50px;
                            margin-right: 15px;
                            position: relative;
                            width: 50px;

                            img:first-child {
                                border-radius: 50%;
                                width: 100%;
                            }

                            img:nth-child(2) {
                                bottom: 0;
                                position: absolute;
                                right: 0;
                                width: 36%;
                            }
                        }
                    }
                }

                & > li:last-child {
                    ol > li {
                        border-bottom: 0;
                    }
                }
            }
        }

        .noComment {
            color: #333;
            font-size: 15px;
            margin: 50px 0;
            text-align: center;
        }
    }
}
</style>
<style>
    .artical p {
        line-height: 30px;
        word-break: break-all;
        word-wrap: break-word;
    }

    .artical img {
        max-width: 100%;
        width: 100%;
    }

    .clearfixed::after {
        clear: both;
        content: '';
        display: table;
    }
</style>
