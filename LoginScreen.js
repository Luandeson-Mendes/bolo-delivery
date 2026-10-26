import {useState} from "react";
import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
export default function LoginScreen({onBack}) {
    const [modoCadastro, setModoCadastro] = useState(false);
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function handleSubmit() {
        if (!email.trim() || !senha.trim()) {
            Alert.alert("Erro", "Por favor, preencha todos os campos.");
            return;
        }

        if (modoCadastro && senha.length < 6) {
            Alert.alert("Senha muito curta", "A senha deve ter no mínimo 6 caracteres.");
            return;
        }

        Alert.alert(modoCadastro ? "Criar conta" : "Entrar", "Seu login foi realizado com sucesso!");
        
    }

    return (
        <KeyboardAvoidingView
            style={styles.coontainer}
            behavior={Platform.OS === "ios" ? "padding" : undefined}>
            <ScrollView contentContainerStyle={styles.conteudo}
                keyboardShouldPersistTaps="handled">
                <TouchableOpacity style={styles.voltar}
                    onPress={onBack}
                    activeOpacity={0.7}>
                    
                    <Text style={styles.textoVoltar}>
                        Voltar
                    </Text>
                </TouchableOpacity>

                <View style={styles.cabecalho}>
                    <Text style={styles.emoji}>
                        bolo
                    </Text>
                    <Text style={styles.nome}>
                        bolo_delivery
                    </Text>
                    <Text style={styles.subtitulo}>
                        SEU PRÓXIMO BOLO FAVORITO ESTÁ AQUI
                    </Text>
                </View>

                <View style={styles.formulario}>
                    <Text style={styles.titulo}>
                        {modoCadastro ? "Crie sua conta" : "Que bom ter você aqui!"}
                    </Text>

                    <Text style={styles.descricao}>
                        {modoCadastro ? "Cadastre-se para continuar." : "Entre para comprar nossos bolos."}
                    </Text>

                    <Text style={styles.label}>
                        E-mail
                    </Text>

                    <TextInput
                        style={styles.input}
                        placeholder="seuemail@exemplo.com"
                        placeholderTextColor="#A99A93"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={email}
                        onChangeText={setEmail}
                    />

                    <Text style={styles.label}>
                        Senha
                    </Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Mínimo de 6 caracteres"
                        placeholderTextColor="#A99A93"
                        secureTextEntry
                        value={senha}
                        onChangeText={setSenha}
                    />

                    <TouchableOpacity
                        style={styles.botao}
                        onPress={handleSubmit}
                        activeOpacity={0.8}>
                        <Text style={styles.textoBotao}>
                            {modoCadastro ? "Criar minha conta" : "Entrar"}
                        </Text>
                    </TouchableOpacity>

                    <View style={styles.linhaCadastro}>
                        <Text style={styles.textoCadastro}>
                            {modoCadastro ? "Já tem uma conta?" : "Ainda não tem uma conta?"}
                        </Text>

                        <TouchableOpacity
                            onPress={() => setModoCadastro(!modoCadastro)}>
                            <Text style={styles.linkCadastro}>
                                {modoCadastro ? "Entrar" : "Cadastre-se"}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}