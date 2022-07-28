<template>
  <div class="hello">
    <h1>{{ first }}</h1>
    <button @click="buttonClick">Affiche un console.log()</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      first: 'Bonjour'
    }
  },
  methods: {
    helloWorld() {
      return 'Je suis un log dans la console';
    },
    buttonClick() {
      console.log('et moi un écouteur de clic !');
    }
  },
  mounted() {
    let displayLog = this.helloWorld()
    console.log(displayLog);
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
button {
  background-color: #42b983;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 1rem;
  padding: 1rem;
  cursor: pointer;
  transition: .4s;
}

button:hover{
  background-color: #2c3e50;
}
</style>
