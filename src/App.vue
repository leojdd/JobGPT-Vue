<template>
  <div id="app" class="app">
    <div class="container">
      <b-overlay :show="loading" no-wrap>
      </b-overlay>

      <b-card bg-variant="dark" text-variant="white" class="card" title="Job GPT, simulate an job interview using artificial intelligence">
        <b-row>
            <b-col>
              <b-form-select v-model="selectedArea" :options="areaOptions"></b-form-select>
            </b-col>
            <b-col>
              <b-form-select v-model="selectedLanguage" :options="languageOptions"></b-form-select>
            </b-col>
            <b-col>
              <b-button v-on:click="startProcess(selectedArea, selectedLanguage)" variant="success">Simulate using AI</b-button>
            </b-col>
        </b-row>
      </b-card>

      <b-modal ref="alert-fill" title="Alert" ok-only>
        <p class="my-4">Please, fill in all fields!</p>
      </b-modal>

      <b-card bg-variant="dark" text-variant="white" title="Welcome to your job interview, good luck!" v-if="questions" class="card">
        <h6>Read the questions...</h6>
        <p v-html="questions"></p>
        <h6>Write your answers below</h6>
        <b-form-textarea id="textarea" v-model="answers[0]" placeholder="Answers 1..." rows="2" max-rows="6" class="text-answer"></b-form-textarea>
        <b-form-textarea id="textarea" v-model="answers[1]" placeholder="Answers 2..." rows="2" max-rows="6" class="text-answer"></b-form-textarea>
        <b-form-textarea id="textarea" v-model="answers[2]" placeholder="Answers 3..." rows="2" max-rows="6" class="text-answer"></b-form-textarea>
        <b-form-textarea id="textarea" v-model="answers[3]" placeholder="Answers 4..." rows="2" max-rows="6" class="text-answer"></b-form-textarea>
        <b-form-textarea id="textarea" v-model="answers[4]" placeholder="Answers 5..." rows="2" max-rows="6" class="text-answer"></b-form-textarea>
        <b-form-textarea id="textarea" v-model="answers[5]" placeholder="Answers 6..." rows="2" max-rows="6" class="text-answer"></b-form-textarea>
        <b-form-textarea id="textarea" v-model="answers[6]" placeholder="Answers 7..." rows="2" max-rows="6" class="text-answer"></b-form-textarea>
        <b-form-textarea id="textarea" v-model="answers[7]" placeholder="Answers 8..." rows="2" max-rows="6" class="text-answer"></b-form-textarea>
        <b-form-textarea id="textarea" v-model="answers[8]" placeholder="Answers 9..." rows="2" max-rows="6" class="text-answer"></b-form-textarea>
        <b-form-textarea id="textarea" v-model="answers[9]" placeholder="Answers 10..." rows="2" max-rows="6" class="text-answer"></b-form-textarea>
        <b-button v-on:click="finishProcess(selectedArea, selectedLanguage, questions, answers)" variant="success" class="finish-button">Generate analytics with AI</b-button>
      </b-card>

      <b-card bg-variant="dark" text-variant="white" class="card" title="Your result is here..." v-if="answerAnalysis">
        <b-row>
            <b-col>
              <p v-html="answerAnalysis"></p>
            </b-col>
        </b-row>
      </b-card>
    </div>
    <div class="footer">
      <h6>Developed by <b-link href="https://linktr.ee/leonardodejesus" target="_blank">Leonardo de Jesus</b-link></h6>
    </div>
  </div>
</template>

<script>
import SimulationScript from "./components/SimulationScript.js";

export default {
  name: 'App',
  mixins: [SimulationScript],
  components: { },
  created () {
    document.title = 'Job GPT | Your job interview simulator with AI'
  },
  data() {
    return {
      // selectedArea: null,
      // selectedLanguage: null,
      selectedArea: 'software development',
      selectedLanguage: 'english',
      areaOptions: [
        { value: null, text: 'Choose your area' },
        { value: 'software development', text: 'Software Development' },
        { value: 'chef', text: 'Cooking' },
        { value: 'foreign trade', text: 'Foreign Trade' }
      ],
      languageOptions: [
        { value: null, text: 'Choose the simulation language' },
        { value: 'english', text: 'English' },
        { value: 'portuguese', text: 'Portuguese' },
        { value: 'spanish', text: 'Spanish' }
      ],
      questions: "",
      answers: [],
      loading: false,
      answerAnalysis: ""
    }
  }
};
</script>

<style>
  @import './assets/styles/selectionComponent.css';
</style>