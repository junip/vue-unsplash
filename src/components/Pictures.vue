<template>
    <div class="row position-relative" :style="backgroundStyle">
        <div class="col-md-6 search-input">
          <div class="row mt-5">
            <div class="col-md-10 pl-5">
            <b-input
            placeholder="Search for photos here"
            v-model="search"
            @input="waitSearch">
            </b-input>
            </div>
            <div class="col-md-2">
              <a :href="download_url" class="image-download">
                <b-button variant="success" size="md" class="float-right">Download </b-button>
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <ul class="list-unstyled">
            <li v-for="photo in photos" :key="photo.id">
              <img class="image-list" height="200" width="200" :src="photo.urls.thumb" alt="img" @click="applyPhoto(photo)" />
            </li>
          </ul>
        </div>
    </div>

</template>

<script>

import axios from 'axios';
import _ from 'lodash'
export default {

  name: 'HelloWorld',
  data () {
    return {
      searchKeywords: ['apple', 'love', 'nature', 'waterfall', 'macbook'],
      photos: [],
      search: null,
      photo_url: null,
      download_url: null,
      msg: 'Welcome to Your Vue.js App'
    }
  },

  created() {
    this.getPhoto()

  },


  computed: {
      backgroundStyle(){

        let style = {}

        if(this.photo_url){
          style.background = `no-repeat center/100% 100% url(${this.photo_url})`;
        } else {
         // style.background = `#cee2b5`;
        }


        return style
      }
  },

  methods: {

    getPhoto() {
      // get the app id using the global variable of unsplash
      let appid = this.$unsplash._applicationId;
      let keywords = this.searchKeywords;

      //to get random keyboard during search whne user opens the page
      let query = keywords[Math.floor(Math.random()*keywords.length)];

      //this.$axios.get(`https://api.unsplash.com/photos?client_id=${appid}`)
       this.$axios.get(`https://api.unsplash.com/search/photos?page=1&per_page=10&query=${query}&client_id=${appid}`)
      .then(response => {
        // JSON responses are automatically parsed.
        this.photos = response.data.results

      })
      .catch(e => {
        console.log(e)
      })


    },

    searchPhoto(){
      let appid = this.$unsplash._applicationId;
      let query  = this.search
      this.$axios.get(`https://api.unsplash.com/search/photos?page=1&per_page=10&query=${query}&client_id=${appid}`)
      .then(response => {
        // JSON responses are automatically parsed.
        this.photos = response.data.results
      })
      .catch(e => {
        console.log(e)
      })
    },

    getRandom(){
      this.$axios.get('https://source.unsplash.com/random')
      .then(response =>{

      })
    },


    applyPhoto(photo){
      this.photo_url = photo.urls.regular
      this.download_url = photo.links.download + '?force=true'
    },

    waitSearch: _.debounce(
                function () {
                     this.searchPhoto();
                },1000)
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.image-list{
  margin-top: 12px
}
/* .search-input{
  display: inline;
} */
</style>
