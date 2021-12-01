import { getDatabase, ref, push, set, onValue, update} from 'firebase/database';

export class books{

    constructor(book){
        //this para atributos
        this.book = book;

    }

    render() {
    
        //espacio para los libros
        let card = document.createElement("div");
        card.className = "Bcard";
    
        //titulos de los libros
        let title = document.createElement("p");
        title.className = "Btitle";
        title.innerHTML = this.book.TITULO;

        //ratting de los libros
        let rating = document.createElement("p");
        rating.className = "Brating";
        rating.innerHTML = this.book.RATING;

        let myRating = document.createElement("input");
        myRating.className = "myRating";
        myRating.placeholder = "Mi rating"
        
        //VOTOS
        let voteBtn = document.createElement("button");
        voteBtn.className = "voteBtn";
        voteBtn.innerHTML = "Votar";

        voteBtn.addEventListener("click", (e, ev)=> {

            if(parseFloat(myRating.value) >= 0 && parseFloat(myRating.value) <= 5) {
            
                const rating = {

                    rating : parseFloat(myRating.value)
                }

                const db = getDatabase();
                const newRating = push(ref(db, "libros/" + this.book.TITULO + '/RATING'));
                set(newRating, rating);

            
                this.getRatings(rating);
                
            } else {

                alert("Solo valores de 0 a 5");

            }
        })

        card.appendChild(title);
        card.appendChild(rating);
        card.appendChild(myRating);

        card.appendChild(voteBtn);
        

        return card;
    }

    getRatings(rating) {

        let suma = 0;
        const db = getDatabase();
       
        
        const ratings = ref(db, "libros/" + this.book.TITULO + "/RATING");

            onValue(ratings, (snapshot)=> {

                const total = snapshot.val();
          
                Object.keys(ratings).forEach((key,index)=> {

                    suma += ratings[key].score;

                });

                let newRating = suma/5;
                let ratingBook = newRating.toFixed(1);
    
                rating.innerHTML = ratingBook;

                const bookRef = ref(db, "libros/" + this.book.TITULO);

                update(bookRef, {"RATING": ratingBook});

            });
    }


}
