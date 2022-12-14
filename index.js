 
            // vowel.innerHTML =   "hii"

btn.addEventListener('click',   function(e){
    e.preventDefault();
    var s = desc.value
    if (s.length > 0) {
        // function vowelsAndConsonants(s) {
            var strConsonants = "";
            var countConsonants = 0
            var strVowels = "";
            var countVowels = 0
            var i;
            
            for (i in s) {
                
                if (s.charAt(i) == "a" || s.charAt(i) == "e" || s.charAt(i) == "i" || 
            s.charAt(i) == "o" || s.charAt(i) == "u") {
                    strVowels += s.charAt(i);
                    countVowels++;
                }
                else if (s.charAt(i) != "a" || s.charAt(i) != "e" || s.charAt(i) != "i" 
            || s.charAt(i) != "o" || s.charAt(i) != "u") {
                    strConsonants += s.charAt(i);
                    countConsonants++;
                }
            }
            // vowel.innerHTML =   "hii"
            consonant.innerHTML =  strConsonants
            totalConsonant.innerHTML =countConsonants
            totalVowel.innerHTML =countVowels
            vowel.innerHTML =  strVowels
            desc.value = ''
            console.log("Consonants: " , strConsonants)
            console.log("Vovel: " , strVowels)


    }else{
        alert('Please enter The text')
    }


})