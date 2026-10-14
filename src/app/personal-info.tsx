import React, {useState, useEffect} from  "react"
import {View, StyleSheet, ScrollView, Alert} from "react-native"
import { useRouter } from "expo-router"
import { useCVContext } from "../context/CVContext"
import { InputField } from "../components/InputField"
import { NavigationButton } from "../components/NavigationButton"
import { PersonalInfo } from "../types/cv.types"

export default function PersonalInfoScreen(){
    const router = useRouter()
    const {cvData, updatePersonalInfo} = useCVContext()
    const [formData, setFormData] = useState<PersonalInfo>(cvData.personalInfo) //?

    useEffect(() => {

        setFormData(cvData.personalInfo)

    }, [cvData.personalInfo])
    
    const handleSave = () => {
        if(!formData.fullName || !formData.email){
            Alert.alert("Error", " Por favor completa al menos el nombre y email")
            return;
        }
        updatePersonalInfo(formData);
        Alert.alert("Exito", " Informacion guardada correctamente", [
            {text: "OK", onPress: () => router.back()}
        ])
        
    }

    return(
        
            <ScrollView>
                <View>
                    <InputField
                    label="Nombre Completo *"
                    placeholder="Juan Perez"
                    value={formData.fullName}
                    onChangeText={(text) => setFormData({...formData, fullName: text})}
        
                    />
                    <InputField
                    label="Email"
                    placeholder="[EMAIL_ADDRESS]"
                    value={formData.email}
                    onChangeText={(text) => setFormData({...formData, email: text})}
                    keyboardType="email-address"
                    autoCapitalize="none"

                    />
                    <InputField
                    label="Telefono"
                    placeholder="+593 9 9999 9999"
                    value={formData.phone}
                    onChangeText={(text) => setFormData({...formData, phone: text})}
                    keyboardType="phone-pad"
                    />
                    <InputField
                    label="Ubicacion"
                    placeholder="Ciudad, Pais"
                    value={formData.location}
                    onChangeText={(text) => setFormData({...formData, location: text})}
                    />
                    <InputField
                    label="Resumen Profesional"
                    placeholder="Describe tu perfil..."
                    value={formData.summary}
                    onChangeText={(text) => setFormData({...formData, summary: text})}
                    multiline
                    numberOfLines={4}
                    style = {{height: 100, textAlignVertical: "top"}}
                    />
                    <NavigationButton
                    title="Guardar Información"
                    onPress={handleSave}
                    variant="secondary" 
                    />
                </View>
            </ScrollView>
    
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5"
    },
    content: {
        padding: 20
    }
})
