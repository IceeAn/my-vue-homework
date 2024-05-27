export type Teacher = {
    id: string;
    name: string;
}

export type Lesson = {
    teacher: string;
    comment?: "课程"|"考试"|"实验"|"其他";
}

export type Schedule = (Lesson|null)[][][]
