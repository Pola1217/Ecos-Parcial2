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

       
        //VOTOS
        let vote1 = document.createElement("button");
        vote1.className = "1Btn";
        vote1.innerHTML = "1";

        let votes = this.book.RATING;

        vote1.addEventListener("click", (e, event) => {

            const db = getDatabase();
            const bdRef = ref(db, "libros/" + this.book.TITULO);
            const ratings = ref(db, "libros/" + this.book.TITULO + "/" + this.book.RATING)
           
            votes += 1;

            let promedio = rating / votes ;
            
            update(ratings, {"Brating": promedio});

           // this.book.RATING ++;
           // this.book.TOTALVOTOS ++;
            
           // set(totalVotos, this.book.TOTALVOTOS );

            
           // set (rating, promedio);

        });

        let vote2 = document.createElement("button");
        vote2.className = "2Btn";
        vote2.innerHTML = "2";

        let vote3 = document.createElement("button");
        vote3.className = "3Btn";
        vote3.innerHTML = "3";

        let vote4 = document.createElement("button");
        vote4.className = "4Btn";
        vote4.innerHTML = "4";

        let vote5 = document.createElement("button");
        vote5.className = "5Btn";
        vote5.innerHTML = "5";

        card.appendChild(title);
        card.appendChild(rating);
        
        card.appendChild(vote1);
        card.appendChild(vote2);
        card.appendChild(vote3);
        card.appendChild(vote4);
        card.appendChild(vote5);

        return card;
    }

}
