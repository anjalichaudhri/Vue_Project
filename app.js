console.log("creating vue app:");

const app = Vue.createApp({
    data(){
        return{
            title: "title test",            
            purpose: "test 2",
            author: 'Anonymous',
            price: '20.00 $',
            frontPage: 'assets/image1.png',
            showBookDetails: true,
            books: [
                {title: "title test 2",            
                purpose: "test 3",
                author: 'Anonymous2',
                price: '15.00 $',
                isFavorite: true,
                frontPage: 'assets/image1.png',},
                {
                    title: "title test 1",            
                purpose: "test 1",
                author: 'Anonymous1',
                price: '10.00 $',
                isFavorite: false,
                frontPage: 'assets/image1.png',
                }
            ]
        };        
    },
    methods: {
        ChangePurpose(){
            this.purpose = 'purpose changed';
        },
        ToggleBookDetails(){
            this.showBookDetails = !this.showBookDetails;
        },
        handleEvent(event, test = "in"){
            console.log(event);
            console.log(test);
        },
        toggleFavorite(book){
            book.isFavorite = !book.isFavorite;
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFavorite);
        }
    }
});

app.mount("#app")