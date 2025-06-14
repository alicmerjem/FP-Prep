// write a pure function increaseGPA
// updates the score of a student by a passed amount

const increaseGPA = (student, amount) => {
    return {
        name: student.name,
        GPA: student.GPA + amount
    };
};