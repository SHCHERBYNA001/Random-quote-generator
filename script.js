function generate(){
    let quotes = {
        "- Pierce Brow": '"Man cannot be freed by the same injustice that enslaved it."',
        "- Deepak Chopra": '"Sex is always about emotions. Good sex is about free emotions; bad sex is about blocked emotions."',
        "- Alysha Speer": '"You never really know whats coming. A small wave, or maybe a big one. All you can really do is hope that when it comes, you can surf over it, instead of drown in its monstrosity."'
    }

    let authors = Object.keys(quotes);

    let author = authors[Math.floor(Math.random() * authors.length)];

    let quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}