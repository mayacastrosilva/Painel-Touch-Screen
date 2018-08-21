
var app = new Vue(
{
    el: '#app',
    methods: {
    prevcidades() {
        if (!this.pageloader) {
            console.log('teste')
            this.pageloader = true
            setTimeout(() => {
                window.location = "climatempo.html"
                this.pageloader = false
            }, 2000)
        }
    },
    previsaoTempo() {
          if (!this.pageloader) {
            console.log('teste')
            this.pageloader = true
            setTimeout(() => {
                window.location = "previsaoTempo.html"
                this.pageloader = false
            }, 2000)
        }
    },
    toNaRede() {
          if (!this.pageloader) {
            console.log('teste')
            this.pageloader = true
            setTimeout(() => {
                window.location = "toNaRede.html"
                this.pageloader = false
            }, 2000)
        }
    },
    entradaVideo() {
          if (!this.pageloader) {
            console.log('teste')
            this.pageloader = true
            setTimeout(() => {
                window.location = "entradaVideo.html"
                this.pageloader = false
            }, 2000)
        }
    },
    g1() {
          if (!this.pageloader) {
            console.log('teste')
            this.pageloader = true
            setTimeout(() => {
                window.location = "g1.html"
                this.pageloader = false
            }, 2000)
        }
    },
    waze() {
          if (!this.pageloader) {
            console.log('teste')
            this.pageloader = true
            setTimeout(() => {
                window.location = "artes.html"
                this.pageloader = false
            }, 2000)
        }
    },
    twitter() {
          if (!this.pageloader) {
            console.log('teste')
            this.pageloader = true
            setTimeout(() => {
                window.location = "socialTv.html"
                this.pageloader = false
            }, 2000)
        }
    },
    home() {
          if (!this.pageloader) {
            console.log('teste')
            this.pageloader = true
            setTimeout(() => {
                window.location = "index.html"
                this.pageloader = false
            }, 2000)
        }
    }
},
data: {
 pageloader: false
}
})