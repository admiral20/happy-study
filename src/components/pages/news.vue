<template>
    <div class="about">
        <mu-container style="padding: 0 2px 10px;">
            <mu-flex justify-content="center">
                <mu-paper :z-depth="1">
                    <mu-appbar color="primary">
                        <mu-button
                            slot="left"
                            icon
                        >
                            <mu-icon value="menu" />
                        </mu-button>
                        news
                    </mu-appbar>
                    <mu-grid-list class="gridlist-demo">
                        <mu-sub-header>December</mu-sub-header>
                        <mu-grid-tile
                            v-for="(tile, index) in list"
                            :key="index"
                        >
                            <img :src="tile.image">
                            <span slot="title">{{ tile.title }}</span>
                            <span slot="subTitle">by <b>{{ tile.author }}</b></span>
                            <mu-button
                                slot="action"
                                icon
                            >
                                <mu-icon value="star_border" />
                            </mu-button>
                        </mu-grid-tile>
                    </mu-grid-list>
                </mu-paper>
            </mu-flex>
        </mu-container>
    </div>
</template>
<script>
    import { breakfast, honey } from '../../../static/images/1.jpg'
    import { burger, morning } from '../../../static/images/2.jpg'
    import { camera, vegetables } from '../../../static/images/3.jpg'
    import { hats, waterPlant } from '../../../static/images/4.jpg'
    export default {
        data () {
            return {
                list: [{
                    image: breakfast,
                    title: 'Breakfast',
                    author: 'Myron'
                }, {
                    image: burger,
                    title: 'Burger',
                    author: 'Linyu'
                }, {
                    image: camera,
                    title: 'Camera',
                    author: 'ruolin'
                }, {
                    image: hats,
                    title: 'Hats',
                    author: 'kakali'
                }, {
                    image: honey,
                    title: 'Honey',
                    author: 'yuyang'
                }, {
                    image: morning,
                    title: 'Morning',
                    author: 'mokayi'
                }, {
                    image: vegetables,
                    title: 'Vegetables',
                    author: 'NUyyyyyyy'
                }, {
                    image: waterPlant,
                    title: 'water',
                    author: 'TDDyyyyyyy'
                }]
            }
        }
    }
</script>
<style lang="less" scoped>
.gridlist-demo {
    overflow-y: auto;
}
</style>
