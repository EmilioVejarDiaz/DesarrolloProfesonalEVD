<template>
    <b-container fluid>
        <b-row class="mt-4">
            <b-col>
                <h1>Formulario</h1>
            </b-col>
        </b-row>
        <b-row class="mt-4">
            <b-col col="5">
                <div>
                    <b-form @submit="onSubmit" @reset="onReset" v-if="show" id="formulario">
                        <b-form-group id="input-group-email" label="Email address:" label-for="input-email"
                            style="margin-bottom: 10px;">
                            <b-form-input id="input-email" v-model="form.email" type="email" placeholder="Enter email"
                                required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"></b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-fullname" label="Full Name:" label-for="input-fullname"
                            style="margin-bottom: 10px;">
                            <b-form-input id="input-fullname" v-model="form.fullName" placeholder="Enter full name" required
                                @input="validateFullName"></b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-address" label="Your Address:" label-for="input-address"
                            style="margin-bottom: 10px;">
                            <b-form-input id="input-address" v-model="form.address.street" placeholder="Enter street"
                                required pattern="[a-zA-Z ]+" style="margin-bottom: 5px;"></b-form-input>
                            <b-form-input id="input-address" v-model="form.address.number" placeholder="Enter number"
                                required pattern="[0-9]+" style="margin-bottom: 5px;"></b-form-input>
                            <b-form-input id="input-address" v-model="form.address.postalCode"
                                placeholder="Enter postal code" required pattern="[0-9]+"
                                style="margin-bottom: 5px;"></b-form-input>
                            <b-form-input id="input-address" v-model="form.address.city" placeholder="Enter city" required
                                pattern="[a-zA-Z ]+" style="margin-bottom: 5px;"></b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-birthdate" label="Fecha de nacimiento:" label-for="input-birthdate"
                            style="margin-bottom: 10px;">
                            <b-input-group class="mb-3">
                                <b-form-input id="example-input" v-model="value" type="text"
                                    placeholder="YYYY-MM-DD"></b-form-input>
                            </b-input-group>
                        </b-form-group>

                        <b-form-group id="input-group-phone" label="Número telefónico:" label-for="input-phone"
                            style="margin-bottom: 10px;">
                            <b-form-input id="input-phone" v-model="form.phone" placeholder="Enter phone number" required
                                pattern="[0-9]{10}"></b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-photo" label="Fotografía:" label-for="input-photo"
                            style="margin-bottom: 10px;">
                            <b-form-file v-model="file2" class="mt-3" plain></b-form-file>
                        </b-form-group>

                        <b-button type="submit" variant="primary">Submit</b-button>
                        <b-button type="reset" variant="danger">Reset</b-button>
                    </b-form>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>
  
<script>
export default {
    data() {
        return {
            form: {
                email: '',
                fullName: '',
                address: {
                    postalCode: '',
                    street: '',
                    number: '',
                    city: '',
                },
                birthdate: '',
                phone: '',
                photo: null,
                value: '',
                file2: null,
            },
            show: true,
        };
    },
    methods: {
        onSubmit(event) {
            event.preventDefault();
            alert(JSON.stringify(this.form));
        },
        onReset(event) {
            event.preventDefault();
            this.form.email = '';
            this.form.name = '';
            this.form.address.postalCode = '';
            this.form.address.street = '';
            this.form.address.number = '';
            this.form.address.city = '';
            this.form.birthdate = '';
            this.form.phone = '';
            this.form.photo = null;

            this.show = false;
            this.$nextTick(() => {
                this.show = true;
            });
        },
        validateFullName() {
            const fullName = this.form.fullName.trim();
            const spaceIndex = fullName.lastIndexOf(' ');

            if (spaceIndex === -1 || fullName.slice(spaceIndex + 1).trim() === '') {
                this.$refs.inputFullname.setCustomValidity('Pon tu nonbre y primer apellido.');
            } else {
                this.$refs.inputFullname.setCustomValidity('');
            }
        },
        validateDate() {
            const currentDate = new Date();
            const selectedDate = new Date(this.value);

            if (selectedDate >= currentDate) {
                this.$refs.exampleInput.setCustomValidity('Please select a past date.');
            } else {
                this.$refs.exampleInput.setCustomValidity('');

                const eighteenYearsAgo = new Date();
                eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);

                if (selectedDate > eighteenYearsAgo) {
                    this.$refs.exampleInput.setCustomValidity('Debes tener al menos 18 años.');
                } else {
                    this.$refs.exampleInput.setCustomValidity('');
                }
            }
        },
        validateFileSize() {
            const fileSizeInMB = this.file2 ? this.file2.size / (1024 * 1024) : 0;

            if (fileSizeInMB > 3) {
                this.$refs.inputPhoto.setCustomValidity('El tamaño del archivo debe ser menor de 3 MB.');
            } else {
                this.$refs.inputPhoto.setCustomValidity('');
            }
        }
    },
};
</script>
  
<style scoped>
.exito-mensaje {
    color: green;
    font-weight: bold;
}

#formulario {
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 5px;
    margin-bottom: 5px;
}
</style>
  