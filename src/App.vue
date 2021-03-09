<template>
  <div id="app">
    <div id="quiz">

  <div v-if="introStage">
    <h1>Welcome to the Quiz</h1>
    <p>
      Press start to begin .
    </p>

    <button @click="startQuiz">START</button>
  </div>

  <div v-if="loader">
    <h1>Welcome to the Quiz</h1>
    <p>
      Loading...
    </p>
  </div>

  <div v-if="questionStage">
    <question
              :question="questions[currentQuestion]"
              v-on:answer="handleAnswer"
              :question-number="currentQuestion+1"
    ></question>
  </div>

  <div class="last" v-if="resultsStage">
    You got {{correct}} right out of {{questions.length}} questions. Your percentage is {{perc}}%.
    <p>  </p>
    <button @click="rl" > PLAY AGAIN </button>
  </div>

</div>

  </div>
</template>

<script>
import question from './components/question.vue'

const quizData = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple';



export default {
  name: 'App',
  components: {
    question
  },
  data() {
    return {
      loader: true,
      introStage:false,
      questionStage:false,
      resultsStage:false,
      title:'Entertainment',
      questions:[],
      currentQuestion:0,
      answers:[],
      correct:0,
      perc:null
    }
  },
  created() {
    fetch(quizData)
    .then(res => res.json())
    .then(res => {
      this.questions = res.results;
      this.questions.forEach((a) => {
        a.incorrect_answers.push(a.correct_answer)
        for (let i = a.incorrect_answers.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a.incorrect_answers[i], a.incorrect_answers[j]] = [
            a.incorrect_answers[j],
            a.incorrect_answers[i],
          ];
        }
      }),
      this.introStage = true;
      this.loader = false;
    })

  },
  methods:{
    startQuiz() {
      this.introStage = false;
      this.questionStage = true;
      console.log('test'+JSON.stringify(this.questions[this.currentQuestion]));
    },
    rl(){
      location.reload();
    },
    handleAnswer(e) {
      console.log('answer event ftw',e);
      this.answers[this.currentQuestion]=e.answer;
      if((this.currentQuestion+1) === this.questions.length) {
        this.handleResults();
        this.questionStage = false;
        this.resultsStage = true;
      } else {
        this.currentQuestion++;
      }
    },
    handleResults() {
      console.log('handle results');
      this.questions.forEach((a, index) => {
        if(this.answers[index] === a.correct_answer) this.correct++;
      });
      this.perc = ((this.correct / this.questions.length)*100).toFixed(2);
      console.log(this.correct+' '+this.perc);
    }
  }
}
</script>

<style>
body {
  background-color: #323232;
}
h1 {
  font-size: 600%;
}
p {
  font-size: 300%;
}
button {
  font-size: 180%;
  color: white;
  background-color: black;
  border-radius: 12px;
  padding: 1% 1%;
}
button:hover{
  color:black;
  background-color:white;
}
#app {
  background-color: white;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #323232;
  margin-top: 60px;
  margin-bottom: 100px;
  padding-top: 60px;
  padding-bottom: 100px;
}

.last{
  font-size:200%;
}
</style>
