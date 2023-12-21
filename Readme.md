# Design

The questions will be stored in an array of objects. Each object contains the questions, the answers and the correct answer in the format:

{  
        "question": "What is the capital city of France?",  
        "answers": ["Madrid", "Rome", "Berlin", "Paris"],  
        "correctAnswer": 3 //is an index in the answers array from 0 to 3  
}  

For generating a random question each time I will use the Fisher-Yates algorithm to randomly shuffle an array containing the indexes of the questions array. This way every time a new game is played the questions appear in a random order. The shuffling could be done on the questions array also, but I decided on using the indexes array for optimization purposes.

The scoring is done after every question, every correct answer is worth one point.

# Class and Database diagram

### Database diagram

For the database diagram I would use 4 tables:
- Question: would contain an id, the question
- Answer: would contain an id primary key, a foreign key referencing the question it belongs to, and a boolean field that would indicate if it is correct. By separating the answers into a separate table we can have as many answers to a question as we would like, and also have multiple correct options
- User: would contain a primary key id, and a name
- Atempt: would contain a primary key id, a foreign key to the userId, and a score field. This way each user can try the quiz multiple times, and all the scores will be saved

### Class diagram

Like the database diagram I would use the same the same four classes.
