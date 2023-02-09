<template>
<div>
    <Modal v-model="modal" titie="123" :closable=false :mask-closable=false footer-hide>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80" class="form">
        <FormItem label="Name" prop="name">
            <Input v-model="formValidate.name" placeholder="Enter your name"></Input>
        </FormItem>
        <FormItem label="E-mail" prop="mail">
            <Input v-model="formValidate.mail" placeholder="Enter your e-mail"></Input>
        </FormItem>
        <FormItem label="City" prop="city">
            <Select v-model="formValidate.city" placeholder="Select your city">
                <Option value="beijing">New York</Option>
                <Option value="shanghai">London</Option>
                <Option value="shenzhen">Sydney</Option>
            </Select>
        </FormItem>
        <FormItem label="Date">
            <Row>
                <Col span="11">
                    <FormItem prop="date">
                        <DatePicker type="date" placeholder="Select date" v-model="formValidate.date"></DatePicker>
                    </FormItem>
                </Col>
                <Col span="2" style="text-align: center">-</Col>
                <Col span="11">
                    <FormItem prop="time">
                        <TimePicker type="time" placeholder="Select time" v-model="formValidate.time"></TimePicker>
                    </FormItem>
                </Col>
            </Row>
        </FormItem>
        <FormItem label="Gender" prop="gender">
            <RadioGroup v-model="formValidate.gender">
                <Radio label="1">Male</Radio>
                <Radio label="2">Female</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="Hobby" prop="interest">
            <CheckboxGroup v-model="formValidate.interest">
                <Checkbox label="Eat"></Checkbox>
                <Checkbox label="Sleep"></Checkbox>
                <Checkbox label="Run"></Checkbox>
                <Checkbox label="Movie"></Checkbox>
            </CheckboxGroup>
        </FormItem>
        <FormItem label="Desc" prop="desc">
            <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem>
            <Button type="primary" :loading="loading" @click="handleSubmit()">保存</Button>
            <Button @click="handleReset()" style="margin-left: 8px">取消</Button>
            <Button @click="look" type="primary">查看</Button>
        </FormItem>
    </Form>
    </Modal>
</div>
</template>
<script>
import { mapMutations } from 'vuex'
/* eslint-disable */
// eslint-disable-next-line
    export default {
        name: 'helloWorld',
        props: ['value'],
        data () {
            return {
                modal: false,
                loading: false,
                object: {},
                // bool: false,
                formValidate: {
                    name: '',
                    mail: '',
                    city: '',
                    gender: '',
                    interest: [],
                    date: '',
                    time: '',
                    desc: ''
                },
                ruleValidate: {
                    name: [
                        { required: true, message: 'The name cannot be empty', trigger: 'blur' }
                    ],
                    mail: [
                        { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' }
                    ],
                    city: [
                        { required: true, message: 'Please select the city', trigger: 'change' }
                    ],
                    gender: [
                        { required: true, message: 'Please select gender', trigger: 'change' }
                    ],
                    interest: [
                        { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
                        { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
                    ],
                    date: [
                        { required: true, type: 'date', message: 'Please select the date', trigger: 'change' }
                    ],
                    time: [
                        { required: true, type: 'string', message: 'Please select time', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
                    ]
                }
            }
        },
        methods: {
            handleSubmit () {
                this.$refs.formValidate.validate((valid) => {
                    if (valid) {
                        // this.object = this.formValidate
                       // console.log(this.formValidate);
                        this.object = Object.assign({},this.formValidate)
                        //console.log(this.object)
                        this.$store.commit('setformValidate', this.object)
                        this.submitsuccess()
                        this.$Message.success('Success!')
                    } else {
                        this.$Message.error('Fail!')
                    }
                })
            },
            handleReset () {
                this.$refs.formValidate.resetFields()
                this.formValidate = {}
                this.modal = false
            },
            submitsuccess () {
                this.handleReset()
            },
            look() {
                console.log(this.$store.state.formValidate)
            },
            ...mapMutations(['setformValidate'])
        },
        created() {
            
        },
        watch: {
            value(v) {
                this.modal = v //父传子
            },
            modal(v) {
                this.$emit('input', v)
            }
        }
    }
</script>
<style>
.form{
    margin-top: 20px;
    margin-bottom: 50px;
}
</style>
