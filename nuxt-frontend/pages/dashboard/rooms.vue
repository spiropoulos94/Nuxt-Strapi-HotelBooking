 <template>
        <div>
            <div class="flex w-screen flex-row">
                <!-- first div here    -->
                <!-- side menu -->
                
                <SideNav class="hidden sm:block sm:w-1/6 h-screen bg-purple-600" :page="routeName" />
                <!-- main display -->
                <!-- second div here -->
                <div class="w-full overflow-x-hidden md:w-5/6 h-screen">
                    <div class="w-screen h-10 m-8">
                        <h1 class="font-black">All Rooms</h1>
                    </div>
                    <div class="w-4/5 mx-auto min-h-screen">
                       
                        
                            <div class="table w-full">
                                <div class="w-full table-row-group">
                                   
                                   <!-- heading row -->
                                    <div class="table-row bg-blue-300 rounded-xl text-white">
                                        <div class="table-cell">
                                            <div class="m-3">Room No.</div>
                                        </div>
                                        <div class="table-cell">
                                            <div class="m-3">Type</div>
                                        </div>
                                        <div class="table-cell">
                                            <div class="m-3">Beds</div>
                                        </div>
                                        <div class="table-cell">
                                            <div class="m-3">Occupied</div>
                                        </div>
                                        
                                    </div>
                                    <!-- end of heading row -->
                                
                                    <div v-for="(room, i) in rooms" :key="i" class="table-row bg-gray-500 text-white">
                                        
                                        <div class="table-cell">
                                            <div class="m-3">{{ room.roomNo }}</div>
                                        </div>
                                        <div class="table-cell">
                                            <div class="m-3">{{ room.type }}</div>
                                        </div>
                                        <div class="table-cell">
                                            <div class="m-3">{{ room.beds }}</div>
                                        </div>
                                        <div class="table-cell">
                                            <div class="m-3">{{ room.occupied }}</div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <!-- end of second div -->
            <!-- <pre> {{this.rooms}} </pre> -->
            </div>
        </div>
    </template>
    <script>
    import { mapActions, mapGetters } from 'vuex'

        export default {
             middleware( $strapi ) {

             },
            data() {
                return {
                    routeName: 'rooms',
                    rooms:[]
                }
            },
            computed: {
                ...mapGetters(['allRooms'])
            },
            mounted() {
                this.getRooms();
            },
            methods: {
                async getRooms () {
                    const rooms = await this.$strapi.$rooms.find()
                    this.rooms = rooms;
                }
            },
        }
    </script>
    <style scoped>
    </style>