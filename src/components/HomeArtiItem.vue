<template>
    <div class="anticle" >
          <div class="titlebox">
            <a class="title">{{artlist.title}}！</a>
            <span class="profile">Lady Gaga一直以奇装异服以及无与伦比的音乐才华异服以及a一直以奇装异服以及无与伦比的音乐才华异服以及a一直以奇装异服以及无与伦比的音乐才华异服以及a一直以奇装异服以及无与伦比的音乐才华异服以及无与伦比的音乐才华异服以及无与伦比的音乐才华异服以及无与伦比的音乐才华异服以及无与伦比的音乐才华受世人所知，日前更凭借《一个明星的诞生》的插曲《Shallow》拿到了她人生中的第一个奥斯
            </span>
          </div>
          <div class="pic" v-if="artlist.img != 'none'">
            <img :src='artlist.img'/>
          </div>
        </div>
</template>
