<template>
<div>
  <div id="quest"> <strong>Question {{ questionNumber }}:</strong><br/><br/> </div>
   <strong id="queststate"> {{question.question}} </strong><br/><br/>
  <div  v-for="(mcanswer,index) in question.incorrect_answers" :key="index">
    <button class="options" :id="'answer'+index" name="currentQuestion" @click="Sanswer(mcanswer)" :value="mcanswer" :disabled = "answered">{{mcanswer}}</button><br/><br/>
  </div>


  <div v-if="answered">
    <div class="sahi" v-if="answer == question.correct_answer"> WoW correct answer !!!!</div>
    <div class="galat" v-if="answer != question.correct_answer"> Wrong anwser The correct answer was {{question.correct_answer}}</div><br/>
    <button @click="submitAnswer">Next</button>
  </div>
</div>
</template>

<script>
export default {
  name: 'question',
  data() {
     console.log(this.question.incorrect_answers);
     return {
       answered: false,
       answer:''
     }
  },
	props:['question','question-number'],
	methods:{
    Sanswer: function(ans){
      this.answered = true;
      this.answer = ans;
    },
		submitAnswer:function() {
			this.$emit('answer', {answer:this.answer});
      this.answer = null;
      this.answered = false;
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

#quest {
  margin-top: 0px;
  font-size: 200%;
}
.sub:hover{
  background-color:white;
  color:black;
}


#queststate {
  font-size: 150%;
}
.options {
  font-size: 120%;
  padding-top: 1%;
  margin-bottom: 0.5%;
  margin-left: 25%;
  margin-right: 25%;
  border-radius: 12px;
  color: white;
  background-color:grey;
  opacity: 0.5;
}
.options:hover{
  background-color:white;
  color:grey;
}
.options:active:after{
  background-color:white;
  color:grey;
}

input {
  color:grey;
}
input:hover{
  background-color:white;
  color:grey;
}
button{
  border-radius:12px;
}

input {
    visibility:hidden;
}
input:checked + #options {
    background: red;
}
.sahi {
font-size:150%;
 color:green;
 padding: 10px;
}
.galat{
  font-size:150%;
  color:red;
}

</style>
