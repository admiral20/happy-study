<template>
  <div class="about">
    <mu-paper :z-depth="1" class="demo-list-wrap">
      <mu-appbar color="teal">
        <mu-button icon slot="left">
          <mu-icon value="menu"></mu-icon>
        </mu-button>
        Me
      </mu-appbar>
      <mu-list>
        <mu-list-item button :ripple="false">
          <mu-list-item-action>
            <mu-icon value="inbox"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>Inbox</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button :ripple="false">
          <mu-list-item-action>
            <mu-icon value="grade"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>Stared</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button :ripple="false">
          <mu-list-item-action>
            <mu-icon value="send"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>Sent mail</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button :ripple="false">
          <mu-list-item-action>
            <mu-icon value="drafts"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>Drafts</mu-list-item-title>
        </mu-list-item>
      </mu-list>
      <mu-divider></mu-divider>
      <mu-list>
        <mu-list-item button :ripple="false">
          <mu-list-item-title>All mail</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon value="info"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item button :ripple="false">
          <mu-list-item-title>Trash</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon value="info"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item button :ripple="false">
          <mu-list-item-title>Spam</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon value="info"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item button :ripple="false">
          <mu-list-item-title>Follow up</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon value="info"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
      </mu-list>
    </mu-paper>
  </div>
</template>
<style>
  .demo-list-wrap {
    width: 100%;
  }
</style>
