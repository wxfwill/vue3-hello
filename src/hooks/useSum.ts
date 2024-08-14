import { ref, onMounted } from "vue";

export default function () {
    let sum = ref(0);
    const add = () => {
        sum.value += 1;
    }
    onMounted(() => {
        add();
    })
    // 对外暴露
    return { sum, add };
}