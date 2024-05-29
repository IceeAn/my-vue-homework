import { computed, reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import type { Schedule } from "@/types";

export const useScheduleStore = defineStore('schedule', () => {
    const schedule: Schedule = reactive([
        {
            lab: "实验室A",
            schedule: [
                [
                    [null, null, { teacher: '1', bookingType: '实验' }, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, { teacher: '1', bookingType: '实验' }],
                    [null, null, null, { teacher: '1', bookingType: '实验' }],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null]
                ],
                [
                    [{ teacher: '1', bookingType: '实验' }, null, null, null],
                    [null, null, null, null],
                    [{ teacher: '1', bookingType: '实验' }, null, null, null],
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
                    [{ teacher: '1', bookingType: '考试' }, null, null, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [{ teacher: '1', bookingType: '课程' }, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [{ teacher: '1', bookingType: '考试' }, null, null, null]
                ],
                [
                    [null, { teacher: '2', bookingType: '实验' }, null, null],
                    [{ teacher: '2', bookingType: '课程' }, { teacher: '1', bookingType: '实验' }, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, { teacher: '2', bookingType: '实验' }, null],
                    [null, null, null, null]
                ],
                [
                    [{ teacher: '2', bookingType: '实验' }, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, { teacher: '2', bookingType: '实验' }],
                    [null, null, null, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [{ teacher: '2', bookingType: '考试' }, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, { teacher: '2', bookingType: '课程' }, { teacher: '2', bookingType: '考试' }, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, { teacher: '2', bookingType: '考试' }],
                    [null, null, null, null],
                    [{ teacher: '2', bookingType: '考试' }, null, null, null]
                ],
                [
                    [null, null, { teacher: '2', bookingType: '课程' }, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, { teacher: '2', bookingType: '实验' }]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, { teacher: '2', bookingType: '考试' }, null],
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
                    [null, { teacher: '2', bookingType: '实验' }, { teacher: '3', bookingType: '考试' }, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, { teacher: '3', bookingType: '实验' }, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, { teacher: '3', bookingType: '课程' }, null, { teacher: '3', bookingType: '实验' }]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, { teacher: '3', bookingType: '实验' }, null, null],
                    [null, null, null, { teacher: '3', bookingType: '实验' }],
                    [null, null, null, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, { teacher: '3', bookingType: '课程' }, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, { teacher: '3', bookingType: '实验' }, null],
                    [null, null, { teacher: '3', bookingType: '考试' }, null],
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
                    [{ teacher: '3', bookingType: '考试' }, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null]
                ]
            ]
        },
        {
            lab: "实验室B",
            schedule: [
                [
                    [{ teacher: '1', bookingType: '实验' }, null, { teacher: '1', bookingType: '实验' }, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, { teacher: '1', bookingType: '实验' }],
                    [null, null, null, { teacher: '1', bookingType: '实验' }],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null]
                ],
                [
                    [{ teacher: '1', bookingType: '实验' }, null, null, null],
                    [null, null, null, null],
                    [{ teacher: '1', bookingType: '实验' }, null, null, null],
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
                    [{ teacher: '1', bookingType: '考试' }, null, null, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [{ teacher: '1', bookingType: '课程' }, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [{ teacher: '1', bookingType: '考试' }, null, null, null]
                ],
                [
                    [null, { teacher: '2', bookingType: '实验' }, null, null],
                    [{ teacher: '2', bookingType: '课程' }, { teacher: '1', bookingType: '实验' }, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, { teacher: '2', bookingType: '实验' }, null],
                    [null, null, null, null]
                ],
                [
                    [{ teacher: '2', bookingType: '实验' }, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, { teacher: '2', bookingType: '实验' }],
                    [null, null, null, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [{ teacher: '2', bookingType: '考试' }, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, { teacher: '2', bookingType: '课程' }, { teacher: '2', bookingType: '考试' }, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, { teacher: '2', bookingType: '考试' }],
                    [null, null, null, null],
                    [{ teacher: '2', bookingType: '考试' }, null, null, null]
                ],
                [
                    [null, null, { teacher: '2', bookingType: '课程' }, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, { teacher: '2', bookingType: '实验' }]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, { teacher: '2', bookingType: '考试' }, null],
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
                    [null, { teacher: '2', bookingType: '实验' }, { teacher: '3', bookingType: '考试' }, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, { teacher: '3', bookingType: '实验' }, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, { teacher: '3', bookingType: '课程' }, null, { teacher: '3', bookingType: '实验' }]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, { teacher: '3', bookingType: '实验' }, null, null],
                    [null, null, null, { teacher: '3', bookingType: '实验' }],
                    [null, null, null, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, { teacher: '3', bookingType: '课程' }, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, { teacher: '3', bookingType: '实验' }, null],
                    [null, null, { teacher: '3', bookingType: '考试' }, null],
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
                    [{ teacher: '3', bookingType: '考试' }, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null]
                ]
            ]
        },
        {
            lab: "实验室C",
            schedule: [
                [
                    [null, null, { teacher: '1', bookingType: '实验' }, null],
                    [{ teacher: '1', bookingType: '实验' }, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, { teacher: '1', bookingType: '实验' }],
                    [null, null, null, { teacher: '1', bookingType: '实验' }],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null]
                ],
                [
                    [{ teacher: '1', bookingType: '实验' }, null, null, null],
                    [null, null, null, null],
                    [{ teacher: '1', bookingType: '实验' }, null, null, null],
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
                    [{ teacher: '1', bookingType: '考试' }, null, null, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [{ teacher: '1', bookingType: '课程' }, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [{ teacher: '1', bookingType: '考试' }, null, null, null]
                ],
                [
                    [null, { teacher: '2', bookingType: '实验' }, null, null],
                    [{ teacher: '2', bookingType: '课程' }, { teacher: '1', bookingType: '实验' }, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, { teacher: '2', bookingType: '实验' }, null],
                    [null, null, null, null]
                ],
                [
                    [{ teacher: '2', bookingType: '实验' }, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, { teacher: '2', bookingType: '实验' }],
                    [null, null, null, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [{ teacher: '2', bookingType: '考试' }, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, { teacher: '2', bookingType: '课程' }, { teacher: '2', bookingType: '考试' }, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, { teacher: '2', bookingType: '考试' }],
                    [null, null, null, null],
                    [{ teacher: '2', bookingType: '考试' }, null, null, null]
                ],
                [
                    [null, null, { teacher: '2', bookingType: '课程' }, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, { teacher: '2', bookingType: '实验' }]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, { teacher: '2', bookingType: '考试' }, null],
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
                    [null, { teacher: '2', bookingType: '实验' }, { teacher: '3', bookingType: '考试' }, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, { teacher: '3', bookingType: '实验' }, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, { teacher: '3', bookingType: '课程' }, null, { teacher: '3', bookingType: '实验' }]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, { teacher: '3', bookingType: '实验' }, null, null],
                    [null, null, null, { teacher: '3', bookingType: '实验' }],
                    [null, null, null, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, { teacher: '3', bookingType: '课程' }, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, { teacher: '3', bookingType: '实验' }, null],
                    [null, null, { teacher: '3', bookingType: '考试' }, null],
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
                    [{ teacher: '3', bookingType: '考试' }, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null]
                ]
            ]
        },
        {
            lab: "实验室D",
            schedule: [
                [
                    [null, null, { teacher: '1', bookingType: '实验' }, null],
                    [null, null, null, null],
                    [{ teacher: '1', bookingType: '实验' }, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, { teacher: '1', bookingType: '实验' }],
                    [null, null, null, { teacher: '1', bookingType: '实验' }],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null]
                ],
                [
                    [{ teacher: '1', bookingType: '实验' }, null, null, null],
                    [null, null, null, null],
                    [{ teacher: '1', bookingType: '实验' }, null, null, null],
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
                    [{ teacher: '1', bookingType: '考试' }, null, null, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [{ teacher: '1', bookingType: '课程' }, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [{ teacher: '1', bookingType: '考试' }, null, null, null]
                ],
                [
                    [null, { teacher: '2', bookingType: '实验' }, null, null],
                    [{ teacher: '2', bookingType: '课程' }, { teacher: '1', bookingType: '实验' }, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, { teacher: '2', bookingType: '实验' }, null],
                    [null, null, null, null]
                ],
                [
                    [{ teacher: '2', bookingType: '实验' }, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, { teacher: '2', bookingType: '实验' }],
                    [null, null, null, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [{ teacher: '2', bookingType: '考试' }, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, { teacher: '2', bookingType: '课程' }, { teacher: '2', bookingType: '考试' }, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, { teacher: '2', bookingType: '考试' }],
                    [null, null, null, null],
                    [{ teacher: '2', bookingType: '考试' }, null, null, null]
                ],
                [
                    [null, null, { teacher: '2', bookingType: '课程' }, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, { teacher: '2', bookingType: '实验' }]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, { teacher: '2', bookingType: '考试' }, null],
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
                    [null, { teacher: '2', bookingType: '实验' }, { teacher: '3', bookingType: '考试' }, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, { teacher: '3', bookingType: '实验' }, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, { teacher: '3', bookingType: '课程' }, null, { teacher: '3', bookingType: '实验' }]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, { teacher: '3', bookingType: '实验' }, null, null],
                    [null, null, null, { teacher: '3', bookingType: '实验' }],
                    [null, null, null, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, { teacher: '3', bookingType: '课程' }, null],
                    [null, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null]
                ],
                [
                    [null, null, null, null],
                    [null, null, { teacher: '3', bookingType: '实验' }, null],
                    [null, null, { teacher: '3', bookingType: '考试' }, null],
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
                    [{ teacher: '3', bookingType: '考试' }, null, null, null],
                    [null, null, null, null],
                    [null, null, null, null]
                ]
            ]
        }
    ])
    return { schedule }
})
