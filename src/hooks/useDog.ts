import { reactive, onMounted } from "vue";
import axios from "axios";


export default function () {
    let dogList = reactive([
        'https://images.dog.ceo/breeds/pembroke/n02113023_5362.jpg',
    ])

    const getDog = async () => {
        try {
            let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random');
            console.log(result?.data.message);
            let newDog = result?.data.message;
            dogList.push(newDog);
        } catch (error) {
            alert(error);
        }

    }
    onMounted(() => {
        getDog();
    })
    // 对外暴露
    return { dogList, getDog };
}