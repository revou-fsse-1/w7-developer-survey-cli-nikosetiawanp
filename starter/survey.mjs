import inquirer from "inquirer";

const questions = [

  // Questions
  {
    type: "input",
    name: "firstName",
    message: "What is your name?",
    validate: (answer) => {
      if (!answer) {
      return "Please enter your name";
      }
      return true;
      },
  },

  {
    type: "input",
    name: "email",
    message: (answer) => {
      return `Hello ${answer.firstName} what is your email address?`
    },
    validate: (answer) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(answer)) {
        return "Please enter correct email address"
      } return true;
    }
  },

  {
    type: "list",
    name: "experience",
    message: "Are you experienced developer?",
    choices: ["Yes", "No"]
  },

  {
    type: "list",
    name: "yearsOfExperience",
    message: "Nice! How many years of experience do you have?",
    choices: ["0-1", "1-3", "3-5", "5-10", "10+"],
    when(answer) {
      return answer.experience === "Yes"
    },
  },

  {
    type: "checkbox",
    name: "javascriptLibrary",
    message: "What Javascript library do you know?",
    isRequired: true,
    choices: ["React", "Vue", "Angular", "NodeJS", "JQuery", "D3.JS"],
  },

  {
    type: "input",
    name: "expectedSalary",
    message: "What is your expected salary? (in Rupiah)",
    validate : (answer) => {
      const numberRegex = /^\d+$/;;

      if (!numberRegex.test(answer) || !answer || answer <= 0) {
        return "Input Invalid, please reenter your expected salary"
      } else if (answer > 10000000) {
        return "Sorry, that is out of our budget!"
      } else {
        return true
      }
    }
  },

];

// run your command
inquirer
  .prompt(questions)

  .then((answers) => {
    console.log(JSON.stringify(answers, null, 2));
  })

  .catch((error) => {
    if (error.isTtyError) {
      console.log("Your console environment is not supported!");
    } else {
      console.log(error);
    }
  })
  ;
  