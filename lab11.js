// 💬
let text = "If you really want to hear about it, the first thing you'll probably want to know is where I was born, an what my lousy childhood was like, and how my parents were occupied and all before they had me, and all that David Copperfield kind of crap, but I don't feel like going into it, if you want to know the truth. In the first place, that stuff bores me, and in the second place, my parents would have about two hemorrhages apiece if I told anything pretty personal about them. They're quite touchy about anything like that, especially my father. They're nice and all but they're also touchy as hell. Besides, I'm not going to tell you my whole goddam autobiography or anything. I'll just tell you about this madman stuff that happened to me around last Christmas just before I got pretty run-down and had to come out here and take it easy. I mean that's all I told DB about, and he's my brother and all. He's in Hollywood. That isn't too far from this crumby place, and he comes over and visits me practically every week end. He's going to drive me home when I go home next month maybe. He just got a Jaguar. One of those little English jobs that can do around two hundred miles an hour. It cost him damn near four thousand bucks. He's got a lot of dough, now. He didn't use to. He used to be just a regular writer, when he was home. He wrote this terrific book of short stories, The Secret Goldfish, in case you never heard of him. The best one in it was The Secret Goldfish. It was about this little kid that wouldn't let anybody look at his goldfish because he'd bought it with his own money. It killed me. Now he's out in Hollywood";

// This code splits words into spaces using an array named words
let words = text.split(" ");

// Uses an arrow function to mapping the words array and
  //turns capital letters to lower case letters.
words = words.map( word => word.toLowerCase() );

// search the words listed in array and
//assigns commas 
words = words.map( function(word){
    return word
        .replaceAll(".", "")    // 💬
        .replaceAll(",", "");   // 💬
});

// declares an empty object
let lookup = {};

// Do a for loop. Loop through all the words.
for ( let i = 0; i < words.length; i++ ){
    let word = words[i];

    // returns the first letter or character at a specific place
    //or position in a string
    let firstLetter = word.charAt(0);

    // use to determine if string or symbol or object has a property
    //returns a boolean value & if the property belongs to the object being tested
    //then true is returned and if it does not then it will return false
    if ( !lookup.hasOwnProperty(firstLetter) ){
        lookup[firstLetter] = [];
    }

    // 💬
    lookup[firstLetter].push(word);
}

// 💬
for ( firstLetter in lookup ){
   let entry = lookup[firstLetter];

   // 💬
   entry = entry.filter((item, index) => entry.indexOf(item) === index);

   // 💬
   entry = entry.sort();

   // 💬
   lookup[firstLetter] = entry;
}

// 💬
for ( letter of Object.keys(lookup).sort() ){
    console.log(letter, lookup[letter]);
}
