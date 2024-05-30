import { computed, reactive } from 'vue'
import type { ComputedRef } from 'vue'
import { defineStore } from 'pinia'
import type { Lesson, LessonWithTime, Schedule } from "@/types";
import { useCurrentTeacherStore } from "@/stores/currentTeacherStore";

export const useScheduleStore = defineStore('schedule', () => {
    const schedule: Schedule = reactive([
        {
            lab: "实验室A",
            schedule: [
                [
                    [null, null, { teacher: '1', course: '1', bookingType: '实验' }, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, { teacher: '1', course: '1', bookingType: '实验' }],
                    [null, null, null, { teacher: '1', course: '1', bookingType: '实验' }],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null]
                ],
                [
                    [{ teacher: '1', course: '1', bookingType: '实验' }, null, null, null],
                    [null, null, null, null],
                    [{ teacher: '1', course: '1', bookingType: '实验' }, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [{ teacher: '1', course: '1', bookingType: '考试' }, null, null, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [{ teacher: '1', course: '1', bookingType: '课程' }, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [{ teacher: '1', course: '1', bookingType: '考试' }, null, null, null]
                ],
                [
                    [null, { teacher: '2', course: '4', bookingType: '实验' }, null, null],
                    [{ teacher: '2', course: '4', bookingType: '课程' }, {
                        teacher: '1',
                        course: '1',
                        bookingType: '实验'
                    }, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, { teacher: '2', course: '4', bookingType: '实验' }, null],
                    [null, null, null, null]
                ],
                [
                    [{ teacher: '2', course: '4', bookingType: '实验' }, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, { teacher: '2', course: '4', bookingType: '实验' }],
                    [null, null, null, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [{ teacher: '2', course: '4', bookingType: '考试' }, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, { teacher: '2', course: '4', bookingType: '课程' }, {
                        teacher: '2',
                        course: '4',
                        bookingType: '考试'
                    }, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, { teacher: '2', course: '4', bookingType: '考试' }],
                    [null, null, null, null],
                    [{ teacher: '2', course: '4', bookingType: '考试' }, null, null, null]
                ],
                [
                    [null, null, { teacher: '2', course: '4', bookingType: '课程' }, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, { teacher: '2', course: '4', bookingType: '实验' }]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, { teacher: '2', course: '4', bookingType: '考试' }, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, { teacher: '2', course: '4', bookingType: '实验' }, {
                        teacher: '3',
                        course: '6',
                        bookingType: '考试'
                    }, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, { teacher: '3', course: '6', bookingType: '实验' }, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, { teacher: '3', course: '6', bookingType: '课程' }, null, {
                        teacher: '3',
                        course: '6',
                        bookingType: '实验'
                    }]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, { teacher: '3', course: '6', bookingType: '实验' }, null, null],
                    [null, null, null, { teacher: '3', course: '6', bookingType: '实验' }],
                    [null, null, null, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, { teacher: '3', course: '6', bookingType: '课程' }, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, { teacher: '3', course: '6', bookingType: '实验' }, null],
                    [null, null, { teacher: '3', course: '6', bookingType: '考试' }, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [{ teacher: '3', course: '6', bookingType: '考试' }, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null]
                ]
            ]
        },
        {
            lab: "实验室B",
            schedule: [
                [
                    [{ teacher: '1', course: '1', bookingType: '实验' }, null, {
                        teacher: '1',
                        course: '1',
                        bookingType: '实验'
                    }, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, { teacher: '1', course: '1', bookingType: '实验' }],
                    [null, null, null, { teacher: '1', course: '1', bookingType: '实验' }],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null]
                ],
                [
                    [{ teacher: '1', course: '1', bookingType: '实验' }, null, null, null],
                    [null, null, null, null],
                    [{ teacher: '1', course: '1', bookingType: '实验' }, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [{ teacher: '1', course: '1', bookingType: '考试' }, null, null, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [{ teacher: '1', course: '1', bookingType: '课程' }, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [{ teacher: '1', course: '1', bookingType: '考试' }, null, null, null]
                ],
                [
                    [null, { teacher: '2', course: '4', bookingType: '实验' }, null, null],
                    [{ teacher: '2', course: '4', bookingType: '课程' }, {
                        teacher: '1',
                        course: '1',
                        bookingType: '实验'
                    }, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, { teacher: '2', course: '4', bookingType: '实验' }, null],
                    [null, null, null, null]
                ],
                [
                    [{ teacher: '2', course: '4', bookingType: '实验' }, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, { teacher: '2', course: '4', bookingType: '实验' }],
                    [null, null, null, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [{ teacher: '2', course: '4', bookingType: '考试' }, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, { teacher: '2', course: '4', bookingType: '课程' }, {
                        teacher: '2',
                        course: '4',
                        bookingType: '考试'
                    }, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, { teacher: '2', course: '4', bookingType: '考试' }],
                    [null, null, null, null],
                    [{ teacher: '2', course: '4', bookingType: '考试' }, null, null, null]
                ],
                [
                    [null, null, { teacher: '2', course: '4', bookingType: '课程' }, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, { teacher: '2', course: '4', bookingType: '实验' }]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, { teacher: '2', course: '4', bookingType: '考试' }, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, { teacher: '2', course: '4', bookingType: '实验' }, {
                        teacher: '3',
                        course: '6',
                        bookingType: '考试'
                    }, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, { teacher: '3', course: '6', bookingType: '实验' }, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, { teacher: '3', course: '6', bookingType: '课程' }, null, {
                        teacher: '3',
                        course: '6',
                        bookingType: '实验'
                    }]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, { teacher: '3', course: '6', bookingType: '实验' }, null, null],
                    [null, null, null, { teacher: '3', course: '6', bookingType: '实验' }],
                    [null, null, null, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, { teacher: '3', course: '6', bookingType: '课程' }, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, { teacher: '3', course: '6', bookingType: '实验' }, null],
                    [null, null, { teacher: '3', course: '6', bookingType: '考试' }, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [{ teacher: '3', course: '6', bookingType: '考试' }, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null]
                ]
            ]
        },
        {
            lab: "实验室C",
            schedule: [
                [
                    [null, null, { teacher: '1', course: '1', bookingType: '实验' }, null],
                    [{ teacher: '1', course: '1', bookingType: '实验' }, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, { teacher: '1', course: '1', bookingType: '实验' }],
                    [null, null, null, { teacher: '1', course: '1', bookingType: '实验' }],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null]
                ],
                [
                    [{ teacher: '1', course: '1', bookingType: '实验' }, null, null, null],
                    [null, null, null, null],
                    [{ teacher: '1', course: '1', bookingType: '实验' }, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [{ teacher: '1', course: '1', bookingType: '考试' }, null, null, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [{ teacher: '1', course: '1', bookingType: '课程' }, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [{ teacher: '1', course: '1', bookingType: '考试' }, null, null, null]
                ],
                [
                    [null, { teacher: '2', course: '4', bookingType: '实验' }, null, null],
                    [{ teacher: '2', course: '4', bookingType: '课程' }, {
                        teacher: '1',
                        course: '1',
                        bookingType: '实验'
                    }, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, { teacher: '2', course: '4', bookingType: '实验' }, null],
                    [null, null, null, null]
                ],
                [
                    [{ teacher: '2', course: '4', bookingType: '实验' }, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, { teacher: '2', course: '4', bookingType: '实验' }],
                    [null, null, null, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [{ teacher: '2', course: '4', bookingType: '考试' }, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, { teacher: '2', course: '4', bookingType: '课程' }, {
                        teacher: '2',
                        course: '4',
                        bookingType: '考试'
                    }, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, { teacher: '2', course: '4', bookingType: '考试' }],
                    [null, null, null, null],
                    [{ teacher: '2', course: '4', bookingType: '考试' }, null, null, null]
                ],
                [
                    [null, null, { teacher: '2', course: '4', bookingType: '课程' }, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, { teacher: '2', course: '4', bookingType: '实验' }]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, { teacher: '2', course: '4', bookingType: '考试' }, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, { teacher: '2', course: '4', bookingType: '实验' }, {
                        teacher: '3',
                        course: '6',
                        bookingType: '考试'
                    }, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, { teacher: '3', course: '6', bookingType: '实验' }, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, { teacher: '3', course: '6', bookingType: '课程' }, null, {
                        teacher: '3',
                        course: '6',
                        bookingType: '实验'
                    }]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, { teacher: '3', course: '6', bookingType: '实验' }, null, null],
                    [null, null, null, { teacher: '3', course: '6', bookingType: '实验' }],
                    [null, null, null, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, { teacher: '3', course: '6', bookingType: '课程' }, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, { teacher: '3', course: '6', bookingType: '实验' }, null],
                    [null, null, { teacher: '3', course: '6', bookingType: '考试' }, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [{ teacher: '3', course: '6', bookingType: '考试' }, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null]
                ]
            ]
        },
        {
            lab: "实验室D",
            schedule: [
                [
                    [null, null, { teacher: '1', course: '1', bookingType: '实验' }, null],
                    [null, null, null, null],
                    [{ teacher: '1', course: '1', bookingType: '实验' }, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, { teacher: '1', course: '1', bookingType: '实验' }],
                    [null, null, null, { teacher: '1', course: '1', bookingType: '实验' }],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null]
                ],
                [
                    [{ teacher: '1', course: '1', bookingType: '实验' }, null, null, null],
                    [null, null, null, null],
                    [{ teacher: '1', course: '1', bookingType: '实验' }, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [{ teacher: '1', course: '1', bookingType: '考试' }, null, null, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [{ teacher: '1', course: '1', bookingType: '课程' }, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [{ teacher: '1', course: '1', bookingType: '考试' }, null, null, null]
                ],
                [
                    [null, { teacher: '2', course: '4', bookingType: '实验' }, null, null],
                    [{ teacher: '2', course: '4', bookingType: '课程' }, {
                        teacher: '1',
                        course: '1',
                        bookingType: '实验'
                    }, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, { teacher: '2', course: '4', bookingType: '实验' }, null],
                    [null, null, null, null]
                ],
                [
                    [{ teacher: '2', course: '4', bookingType: '实验' }, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, { teacher: '2', course: '4', bookingType: '实验' }],
                    [null, null, null, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [{ teacher: '2', course: '4', bookingType: '考试' }, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, { teacher: '2', course: '4', bookingType: '课程' }, {
                        teacher: '2',
                        course: '4',
                        bookingType: '考试'
                    }, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, { teacher: '2', course: '4', bookingType: '考试' }],
                    [null, null, null, null],
                    [{ teacher: '2', course: '4', bookingType: '考试' }, null, null, null]
                ],
                [
                    [null, null, { teacher: '2', course: '4', bookingType: '课程' }, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, { teacher: '2', course: '4', bookingType: '实验' }]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, { teacher: '2', course: '4', bookingType: '考试' }, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, { teacher: '2', course: '4', bookingType: '实验' }, {
                        teacher: '3',
                        course: '6',
                        bookingType: '考试'
                    }, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, { teacher: '3', course: '6', bookingType: '实验' }, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, { teacher: '3', course: '6', bookingType: '课程' }, null, {
                        teacher: '3',
                        course: '6',
                        bookingType: '实验'
                    }]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, { teacher: '3', course: '6', bookingType: '实验' }, null, null],
                    [null, null, null, { teacher: '3', course: '6', bookingType: '实验' }],
                    [null, null, null, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, { teacher: '3', course: '6', bookingType: '课程' }, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, { teacher: '3', course: '6', bookingType: '实验' }, null],
                    [null, null, { teacher: '3', course: '6', bookingType: '考试' }, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [{ teacher: '3', course: '6', bookingType: '考试' }, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null]
                ]
            ]
        }
    ])

    const currentTeacherStore = useCurrentTeacherStore()

    const myLessons = computed(() => {
        return schedule
            .flatMap((lab) =>
                lab.schedule.flatMap((week, weekIndex) =>
                    week.flatMap((day, dayIndex) => {
                            return day
                                .map((lesson, lessonIndex) => {
                                    if (lesson && lesson.teacher && lesson.teacher === currentTeacherStore.currentTeacher.id) {
                                        return {
                                            lesson,
                                            time: {
                                                lab: lab.lab,
                                                week: weekIndex,
                                                day: dayIndex,
                                                period: lessonIndex
                                            }
                                        };
                                    }
                                    return null;
                                })
                                .filter((item): item is LessonWithTime => item !== null);
                        }
                    )
                )
            )
    });

    function calculateCourseHours(courseId: string) {
        // 对每个匹配的课程计数，并每次加2学时
        return computed(() => schedule
            .flatMap(lab => lab.schedule)
            .flat(2)
            .filter(courseSlot => courseSlot && courseSlot.course === courseId)
            .reduce((acc, _) => acc + 2, 0)
        )
    }

    return { schedule, calculateCourseHours, myLessons }
})
