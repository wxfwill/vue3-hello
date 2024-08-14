// 接口
export interface personInter {
    name: string
    age: number
}

// 自定义类型
export type persons = Array<personInter>  // 或者 type persons = personInter[]
