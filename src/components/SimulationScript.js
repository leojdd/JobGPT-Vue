export default {
  data() {
    return {
      questions: "",
      loading: false,
      answerAnalysis: ""
    };
  },
  methods: {
    async startProcess(selectedArea, selectedLanguage) {
      this.loading = true;

      if (!selectedArea || !selectedLanguage) {
        this.$refs['alert-fill'].show()
        return
      }

      const response = await fetch("http://localhost:3000/jobgpt/generate_questions", {
        method: "POST",
        body: JSON.stringify({
          area: selectedArea,
          language: selectedLanguage
        }),
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
        },
      });

      const data = await response.json();

      console.log(data)

      this.questions = data.result

      this.loading = false;
    },
    async finishProcess(selectedArea, selectedLanguage, questions, answers) {
      this.loading = true;

      const response = await fetch("http://localhost:3000/jobgpt/send_answers", {
        method: "POST",
        body: JSON.stringify({
          area: selectedArea,
          language: selectedLanguage,
          questions,
          answers
        }),
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
        },
      });

      const data = await response.json();

      console.log(data)

      this.answerAnalysis = data.result

      this.loading = false;
    },
  },
};
