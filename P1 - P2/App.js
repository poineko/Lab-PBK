const App = Vue.createApp({
    data() {
        return {
            nama : 'Poi',
            umur : 25,
            tampilanP1 : true,
            tampilanP2 : true,
            X : 0,
            y : 0,
            mhs : [
                {nama : 'ihsan', npm: 19351482,  img: 'assets/1.jpg', tandai: true },
                {nama : 'poi', npm: 19351483,  img: 'assets/2.jpg', tandai: false },
                {nama : 'alriawi', npm: 19351484,  img: 'assets/3.jpg', tandai: true },
            ]
        }
    },
    methods : {
        tombolUbah() {
            this.nama = 'Ihsan'
        },
        tombolUbahPmr(nama) {
            this.nama = nama
        },
        tombolTampilP1() {
            this.tampilanP1 = !this.tampilanP1
        },
        tombolTampilP2() {
            this.tampilanP2 = !this.tampilanP2
        },
        handleEvent(e, data) {
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
        },
        handleMouseMove(e) {
            this.X = e.offsetX
            this.y = e.offsetY
        },
        handleTanda(mhs) {
            mhs.tandai = !mhs.tandai
        }
    },
    computed : {
        filteredMhs() {
            return this.mhs.filter((mhs) => mhs.tandai)
        }
    } 
})

App.mount('#App')