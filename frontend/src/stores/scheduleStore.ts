import { computed, reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import type { Schedule } from "@/types";

export const useScheduleStore = defineStore('schedule', () => {
    const schedule: Schedule = reactive([
        [
            [null, null, { 'teacher': '1', 'comment': '实验' }, null],
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null]
        ],
        [
            [null, null, null, null],
            [null, null, null, { 'teacher': '1', 'comment': '实验' }],
            [null, null, null, { 'teacher': '1', 'comment': '实验' }],
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null]
        ],
        [
            [{ 'teacher': '1', 'comment': '实验' }, null, null, null],
            [null, null, null, null],
            [{ 'teacher': '1', 'comment': '实验' }, null, null, null],
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
            [{ 'teacher': '1', 'comment': '考试' }, null, null, null],
            [null, null, null, null]
        ],
        [
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
            [{ 'teacher': '1', 'comment': '课程' }, null, null, null]
        ],
        [
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
            [{ 'teacher': '1', 'comment': '考试' }, null, null, null]
        ],
        [
            [null, { 'teacher': '2', 'comment': '实验' }, null, null],
            [{ 'teacher': '2', 'comment': '课程' }, { 'teacher': '1', 'comment': '实验' }, null, null],
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
            [null, null, { 'teacher': '2', 'comment': '实验' }, null],
            [null, null, null, null]
        ],
        [
            [{ 'teacher': '2', 'comment': '实验' }, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, { 'teacher': '2', 'comment': '实验' }],
            [null, null, null, null],
            [null, null, null, null]
        ],
        [
            [null, null, null, null],
            [{ 'teacher': '2', 'comment': '考试' }, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
            [null, { 'teacher': '2', 'comment': '课程' }, { 'teacher': '2', 'comment': '考试' }, null],
            [null, null, null, null]
        ],
        [
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, { 'teacher': '2', 'comment': '考试' }],
            [null, null, null, null],
            [{ 'teacher': '2', 'comment': '考试' }, null, null, null]
        ],
        [
            [null, null, { 'teacher': '2', 'comment': '课程' }, null],
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, { 'teacher': '2', 'comment': '实验' }]
        ],
        [
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
            [null, null, { 'teacher': '2', 'comment': '考试' }, null],
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
            [null, { 'teacher': '2', 'comment': '实验' }, { 'teacher': '3', 'comment': '考试' }, null],
            [null, null, null, null]
        ],
        [
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
            [null, null, { 'teacher': '3', 'comment': '实验' }, null],
            [null, null, null, null],
            [null, null, null, null],
            [null, { 'teacher': '3', 'comment': '课程' }, null, { 'teacher': '3', 'comment': '实验' }]
        ],
        [
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
            [null, { 'teacher': '3', 'comment': '实验' }, null, null],
            [null, null, null, { 'teacher': '3', 'comment': '实验' }],
            [null, null, null, null],
            [null, null, null, null]
        ],
        [
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
            [null, null, { 'teacher': '3', 'comment': '课程' }, null],
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null]
        ],
        [
            [null, null, null, null],
            [null, null, { 'teacher': '3', 'comment': '实验' }, null],
            [null, null, { 'teacher': '3', 'comment': '考试' }, null],
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
            [{ 'teacher': '3', 'comment': '考试' }, null, null, null],
            [null, null, null, null],
            [null, null, null, null]
        ]
    ])

    // const doubleCount = computed(() => count.value * 2)
    //
    // function increment() {
    //     week.value++
    // }

    return { schedule }
})
