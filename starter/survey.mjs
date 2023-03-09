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
      if (!answer) {
      return "Please enter your email address";
      }
      return true;
      }
  },

  {
    type: "list",
    name: "experience",
    message: "Are you experienced developer?",
    choices: ["Experienced", "Inexperienced"],
    when: ()
  },

  {
    type: "list",
    name: "yearsOfExperience",
    message: "Nice! How many years of experience do you have?",
    choices: ["0-1", "1-3", "3-5", "5-10", "10+"],
  }

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
  });
  