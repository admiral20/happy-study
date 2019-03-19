<template>
  <mu-container style="padding: 0 0 35px;">
    <mu-row>
      <mu-col span="24">
        <mu-paper :z-depth="2">
          <mu-list>
            <mu-sub-header>Today</mu-sub-header>
            <div v-for="(item, index) in 5" :key="index">
              <mu-list-item avatar>
                <mu-list-item-action avatar>
                  <mu-avatar>
                    <img src="../../../static/images/1.jpg">
                  </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-content>
                  <mu-list-item-title>Mike Li</mu-list-item-title>
                </mu-list-item-content>
                <mu-list-item-action>
                  <mu-icon value="chat_bubble"></mu-icon>
                </mu-list-item-action>
              </mu-list-item>
              <mu-list-item avatar>
                <mu-list-item-action avatar>
                  <mu-avatar>
                    <img src="../../../static/images/2.jpg">
                  </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-content>
                  <mu-list-item-title>Maco Mai</mu-list-item-title>
                </mu-list-item-content>
                <mu-list-item-action>
                  <mu-icon value="chat_bubble"></mu-icon>
                </mu-list-item-action>
              </mu-list-item>
              <mu-list-item avatar>
                <mu-list-item-action avatar>
                  <mu-avatar>
                    <img src="../../../static/images/3.jpg">
                  </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-content>
                  <mu-list-item-title>Alex Qin</mu-list-item-title>
                </mu-list-item-content>
                <mu-list-item-action>
                  <mu-icon value="chat_bubble"></mu-icon>
                </mu-list-item-action>
              </mu-list-item>
              <mu-list-item avatar>
                <mu-list-item-action avatar>
                  <mu-avatar>
                    <img src="../../../static/images/4.jpg">
                  </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-content>
                  <mu-list-item-title>Allen Qun</mu-list-item-title>
                </mu-list-item-content>
                <mu-list-item-action>
                  <mu-icon value="chat_bubble"></mu-icon>
                </mu-list-item-action>
              </mu-list-item>
              <mu-list-item avatar>
                <mu-list-item-action avatar>
                  <mu-avatar>
                    <img src="../../../static/images/1.jpg">
                  </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-content>
                  <mu-list-item-title>Myron Liu</mu-list-item-title>
                </mu-list-item-content>
                <mu-list-item-action>
                  <mu-icon value="chat_bubble"></mu-icon>
                </mu-list-item-action>
              </mu-list-item>
             </div>
          </mu-list>
          <mu-divider></mu-divider>
          <mu-list>
            <mu-sub-header>History</mu-sub-header>
            <mu-list-item avatar>
              <mu-list-item-action avatar>
                <mu-avatar>
                  <img src="../../../static/images/2.jpg">
                </mu-avatar>
              </mu-list-item-action>
              <mu-list-item-content>
                <mu-list-item-title>Gaia Zhou</mu-list-item-title>
              </mu-list-item-content>
              <mu-list-item-action>
                <mu-icon value="chat_bubble"></mu-icon>
              </mu-list-item-action>
            </mu-list-item>
            <mu-list-item avatar>
              <mu-list-item-action avatar>
                <mu-avatar>
                  <img src="../../../static/images/3.jpg">
                </mu-avatar>
              </mu-list-item-action>
              <mu-list-item-content>
                <mu-list-item-title>Miller Wang</mu-list-item-title>
              </mu-list-item-content>
              <mu-list-item-action>
                <mu-icon value="chat_bubble"></mu-icon>
              </mu-list-item-action>
            </mu-list-item>
          </mu-list>
        </mu-paper>
      </mu-col>
    </mu-row>
  </mu-container>
</template>
