export type Teacher = {
    id: string;
    name: string;
}

export type Course = {
    id: string;
    teacher: Teacher;
    name: string;
    creditHour: number;
}

export type Lesson = {
    teacher: string;
    course: string;
    bookingType?: "课程"|"考试"|"实验"|"其他";
}

export type LessonWithTime = {
    lesson: Lesson
    time: {
        lab: string;
        week: number;
        day: number;
        period: number;
    }
}

export type Schedule = {lab: string, schedule: LabSchedule}[]
export type LabSchedule = (Lesson|null)[][][]

export type Booking = {
    lab: string;
    schedule: number;
    lesson: number;
    teacher: string;
    comment: string;
}

export type Lab = {
    id: string;
    name: string;
}
