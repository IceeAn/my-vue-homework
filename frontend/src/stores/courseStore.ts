import { computed, reactive, ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'
import type { Course } from "@/types";
import { IdGenerator } from "@/stores/idGenerator";
import { useCurrentTeacherStore } from "@/stores/currentTeacherStore";

export const useCourseStore = defineStore('course', () => {
    const currentTeacherStore = useCurrentTeacherStore();

    const courses: Ref<Course[]> = ref([
        {
            id: "1",
            teacher: {
                id: "1",
                name: "王老师"
            },
            name: "课程1",
            creditHour: 16
        },
        {
            id: "2",
            teacher: {
                id: "1",
                name: "王老师"
            },
            name: "课程2",
            creditHour: 32
        },
        {
            id: "3",
            teacher: {
                id: "1",
                name: "王老师"
            },
            name: "课程3",
            creditHour: 16
        },
        {
            id: "4",
            teacher: {
                id: "2",
                name: "张老师"
            },
            name: "课程A",
            creditHour: 16
        },
        {
            id: "5",
            teacher: {
                id: "2",
                name: "张老师"
            },
            name: "课程B",
            creditHour: 32
        },
        {
            id: "6",
            teacher: {
                id: "2",
                name: "张老师"
            },
            name: "课程C",
            creditHour: 16
        }
    ])

    const operatingCourse = ref<Course>({ id: "", teacher: { id: "", name: "" }, name: "", creditHour: 0 })

    const myCourses = computed(() => {
        return courses.value.filter(item => item.teacher.id === currentTeacherStore.currentTeacher.id);
    });

    function addCourse(course: { name: string, creditHour: string }) {
        course.id = 100 + IdGenerator().getNextId();
        course.teacher = currentTeacherStore.currentTeacher;
        courses.value.push(course);
    }

    function deleteCourse(id: string) {
        const index = courses.value.findIndex(item => item.id === id);
        courses.value.splice(index, 1);
    }

    function updateCourse(course: Course) {
        const index = courses.value.findIndex(item => item.id === course.id);
        courses.value.splice(index, 1, course);
    }

    function findCourseById(id: string) {
        return courses.value.find(item => item.id === id);
    }

    return { courses, myCourses, operatingCourse, addCourse, deleteCourse, updateCourse, findCourseById }

})
