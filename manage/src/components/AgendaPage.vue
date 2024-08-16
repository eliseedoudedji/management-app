<script setup>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list';
import { useDayStore } from '@/stores/DayStore'
const store = useDayStore()
import { ref, } from 'vue'
var calendarOptions = ref({
    plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin],
    initialView: 'dayGridMonth',
    headerToolbar: {
        start: 'title',
        center: 'dayGridMonth,timeGridWeek,timeGridDay, listWeek',
        end: 'today,prev,next'
    },
    buttonText: {
        today: 'Today'
    },
    selectable: true,

    dateClick: handleDateClick,
})
var daySelect = ref(null)
var isSelect = ref(false)
var title = ref('')
var contente = ref('')
function handleDateClick(arg) {
    daySelect.value = arg.dateStr

    isSelect.value = true

}
var event = ref(null)
var curent = ref(null)
async function send() {
    if (title.value == '' || title.value.trim() == '') {
        alert('Champd vide')
        return false
    }
    if (contente.value == '' || contente.value.trim() == '') {
        alert('Champd vide')
        return false
    }
    event.value = {
        date: daySelect.value,
        title: title.value,
        contente: contente.value
    }
    store.addEvent(event.value)
    if (store.success == true) {
        isSelect.value = false

    }
    console.log(JSON.parse(localStorage.getItem(daySelect.value)));
     curent.value = JSON.parse(localStorage.getItem(daySelect.value))


}


</script>
<template>


    <div class="row mt-5 mx-2" style="z-index: 1;">
        <div class="col-8">
            <FullCalendar :options="calendarOptions" />

        </div>
        <div class="col-4">
            <h2>My plans</h2>
            date : {{ daySelect }} <br>
            title : {{ event.title }} <br>
            Contente : {{ event.contente }}
        </div>

    </div>
    <div id="todisplay" v-if="isSelect">

        <div class=" " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">New schedule</h5>

                    </div>
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Day selected : {{ daySelect }}</h5>

                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">title:</label>
                                <input type="text" class="form-control" id="recipient-name" v-model="title" required />
                            </div>
                            <div class="mb-3">
                                <label for="message-text" class="col-form-label">Contente:</label>
                                <textarea class="form-control" id="message-text" v-model="contente" required></textarea>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button " class="btn btn-danger mx-3" data-mdb-ripple-init data-mdb-dismiss="modal"
                            @click="isSelect = !isSelect">Cancel</button>
                        <button type="button" class="btn btn-primary" data-mdb-ripple-init @click="send">Create</button>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>
<style scoped>
#todisplay {
    position: absolute;
    top: 32%;
    left: 37%;
    z-index: 999;
    width: 500px;
    height: 400px;
    background-color: rgb(0, 0, 0);
    padding: 20px;
    border: 1px solid black;
    border-radius: 10px;
    color: white;
}
</style>