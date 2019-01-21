<template>
    <Table border :columns="columns12" :data="data6">
        <template slot-scope="{ row }" slot="name">
            <strong>{{ row.name }}</strong>
        </template>
        <template slot-scope="{ row, index }" slot="action">
            <Button type="primary" size="small" style="margin-right: 5px" @click="show()">View</Button>
            <Modal
                v-model="modal6"
                title="Title"
                :loading="loading"
                @on-ok="asyncOK">
                <!-- <Upload action="//192.168.0.1/upload"
                    :before-upload="handleBeforeUpload"
                    :on-success="handleSuccessUpload">
                   <Button icon="ios-cloud-upload-outline">上传</Button>
                </Upload> -->
                <Upload :before-upload="handleBeforeUpload" action="//192.168.0.1/upload">
                    <Button icon="ios-cloud-upload-outline">Select the file to upload</Button>
                </Upload>
                <div v-if="readyFiles !== null">Upload file: {{ readyFiles.name }} <Button type="text" @click="handleSuccessUpload" :loading="loadingStatus">上传</Button></div>
            </Modal>
            <Button type="error" size="small" @click="remove(index)">Delete</Button>
        </template>
    </Table>
</template>
<script>
    export default {
        data () {
            return {
                modal6: false,
                loading: true,
                readyFiles: null,
                loadingStatus: false,
                columns12: [
                    {
                        title: 'Name',
                        slot: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    },
                    {
                        title: 'Action',
                        slot: 'action',
                        width: 150,
                        align: 'center'
                    }
                ],
                data6: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park'
                    }
                ]
            }
        },
        methods: {
            show (index) {
                this.modal6 = true;
            },
            remove (index) {
                this.data6.splice(index, 1);
            },
            asyncOK () {
                setTimeout(() => {
                    this.modal6 = false;
                }, 2000);
            },
            handleBeforeUpload (file) {
                this.readyFiles = file;
                return false;
            },
            handleSuccessUpload () {
                this.loadingStatus = true;
                for (let i = 0; i < this.readyFiles.length; i++) {
                    let file = this.readyFiles[i];
                    this.$refs.upload.post(file);
                }
            }
        }
    }
</script>