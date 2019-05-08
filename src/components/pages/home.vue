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
    padding: 0;
    margin: 0;
}

#headLine {
    width: 100%;
    padding: 5px 0 0;
    background: #fff;

    header {
        padding: 10px 20px;
        margin: -6px 0 5px;
        font-weight: bold;
        font-size: 18px;
        line-height: 30px;
    }

    section {
        display: flex;
        align-items: center;
        height: 20px;
        padding: 0 20px;
        margin-bottom: 10px;
        font-size: 12px;
        line-height: 20px;
        color: #666;

        .author {
            flex: 1;
            width: 200px;
            margin-right: 5px;
            margin-left: 15px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        & > i {
            line-height: 20px;
        }

        img {
            width: 15px;
            height: 13px;
            margin-right: 5px;
        }
    }

    .content {
        width: 100%;
        padding: 0 20px;

        .contentImg {
            width: 100%;
            border-radius: 10px;
        }
    }

    .artical {
        width: 100%;
        padding: 0 20px;
        background: #fff;
    }

    .answer-box {
        width: 100%;
        margin-top: 10px;
        overflow: auto;
        background: #fff;
        -webkit-overflow-scrolling: touch;

        .all-answer {
            padding-left: 20px;
            margin-top: 10px;
            background: #fff;

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
                                font-size: 15px;
                                word-wrap: break-word;
                                word-break: break-all;
                                color: #333;

                                span {
                                    font-weight: bolder;
                                }
                            }

                            .role-font {
                                // height: 23px;
                                height: auto;
                                line-height: 23px;

                                .nickName {
                                    margin-right: 5px;
                                    font-weight: bolder;
                                    font-size: 17px;
                                    color: #333;
                                }

                                .nickSf {
                                    display: inline-block;
                                    padding: 0 5px;
                                    border-radius: 4px;
                                    font-size: 12px;
                                    line-height: 18px;
                                    vertical-align: text-top;
                                    letter-spacing: 0;
                                    color: #fff;
                                }

                                .isSocailManagerType {
                                    background: #ee7c0c;
                                }

                                .noSocailManagerType {
                                    background: #0062fd;
                                }
                            }

                            .answer-foot {
                                width: 100%;
                                margin-top: 10px;
                                font-size: 12px;

                                .date-btn {
                                    color: #666;
                                }

                                span:last-child {
                                    float: right;
                                    display: flex;
                                }

                                .reply-btn {
                                    display: inline-block;
                                    width: 35px;
                                    text-align: right;
                                    color: #0062fd;
                                }

                                .praiseCountStyle {
                                    width: 20px;
                                    height: 25px;
                                    line-height: 25px;
                                    background: url(../../../static/images/icon_g2_m.png) no-repeat;
                                    background-size: 85%;
                                }

                                .noPraiseCountStyle {
                                    width: 20px;
                                    height: 25px;
                                    line-height: 25px;
                                    background: url(../../../static/images/icon_g_m.png) no-repeat;
                                    background-size: 85%;
                                }
                            }
                        }

                        & > li:nth-child(2) {
                            flex: 1;
                            box-sizing: border-box;
                            padding-right: 30px;
                            padding-bottom: 20px;
                            border-bottom: 1px solid #ddd;
                            text-align: left;

                            i {
                                display: inline-block;
                                width: 20px;
                                font-size: 15px;
                            }
                        }

                        .headPortrait {
                            position: relative;
                            width: 50px;
                            height: 50px;
                            margin-right: 15px;

                            img:first-child {
                                width: 100%;
                                border-radius: 50%;
                            }

                            img:nth-child(2) {
                                position: absolute;
                                bottom: 0;
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
            margin: 50px 0;
            font-size: 15px;
            text-align: center;
            color: #333;
        }
    }
}
</style>
<style>
    .artical p {
        line-height: 30px;
        word-wrap: break-word;
        word-break: break-all;
    }

    .artical img {
        width: 100%;
        max-width: 100%;
    }

    .clearfixed::after {
        clear: both;
        display: table;
        content: '';
    }
</style>
