function tugas(){
    function Question(question, answers, correct){
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    
    Question.prototype.displayQuestion = function(){
        console.log(this.question);
        
        for(var i = 0; i < this.answers.length; i++){
            console.log(i + ': ' + this.answers[i]);
        }
    }
    var score=0;
    Question.prototype.checkAnswer = function(ans){
        
       
        
        if(ans === this.correct){
            score+=1
        console.log('Jawaban Benar!. Skor Anda : '+score);
            
        }
        else{
        console.log('Salah. Coba Lagi!')
        }
    }
    
    var q1 = new Question('apa nama pulau terbesar di indonesia?',
        ['kalimantan', 'jawa', 'sulawesi'],
        0);
    
    var q2 = new Question('sebutkan makanan asal sumatra barat?',
        ['rendang', 'gudeg', 'bawang'],
        0);
    
    var q3 = new Question('suku yang berada di kalimantan?',
        ['ambon', 'baduy', 'dayak'],
        2);
    
    var q4 = new Question('apa nama alat musik dari NTT?',
        ['gamelan', 'sasando', 'suling'],
        1);
    
    var q5 = new Question('apa nama senjata asal jawa barat?',
        ['keris', 'parang', 'kujang'],
        2);
    
    J:
    
    {
   for (;;){     
    
    var questions = [q1,q2,q3,q4,q5];
    
    var n = Math.floor(Math.random()*questions.length);
    
    questions[n].displayQuestion();
    
    var answer = prompt('Pilih Jawaban Yang Benar.');
       if(answer == 'exit'){
           break J;
       }
       
    
    questions[n].checkAnswer(answer);
}}
       };