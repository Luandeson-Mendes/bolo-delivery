import { useRouter } from "expo-router";
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
export default function LoginScreen() {
    const router = useRouter();

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
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : undefined}>
            <ScrollView contentContainerStyle={styles.conteudo}
                keyboardShouldPersistTaps="handled">
                <TouchableOpacity style={styles.voltar}
                    onPress={() => router.navigate("/")}
                    activeOpacity={0.7}>
                    
                    <Text style={styles.textoVoltar}>
                        Voltar
                    </Text>
                </TouchableOpacity>

                <View style={styles.cabecalho}>
                    <Text style={styles.emoji}>
                        Login
                    </Text>
                    <Text style={styles.nome}>
                        Nome do app
                    </Text>
                    <Text style={styles.subtitulo}>
                        SEU PRÓXIMO BOLO FAVORITO ESTÁ AQUI
                    </Text>
                </View>

                <View style={styles.formulario}>
                    <Text style={styles.titulo}>
                        {modoCadastro ? "Crie sua conta" : "Que bom ter você de volta!"}
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
                            {modoCadastro ? "Já tem uma conta?" : "Ainda não tem uma conta? "}
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF8F0",
    },
    conteudo: {
        flexGrow: 1,
        padding: 24,
        paddingTop: 20,
        justifyContent: "center",
    },
    voltar: {
        alignSelf: "flex-start",
        paddingVertical: 40,
        paddingHorizontal: 12,
    },
    textoVoltar: {
        color: "#8E4F43",
        fontSize: 16,
        fontWeight: "600",
    },
    cabecalho: {
        alignItems: "center",
        marginTop: 24,
        marginBottom: 32,
    },
    emoji: {
        fontSize: 54,
        marginBottom: 8,
    },
    nome: {
        color: "#713F35",
        fontSize: 30,
        fontWeight: "800",
    },
    subtitulo: {
        color: "#A4776B",
        fontSize: 9,
        fontWeight: "700",
        letterSpacing: 1.5,
        marginTop: 8,
        textAlign: "center",
    },
    formulario: {
        backgroundColor: "#FFFFFF",
        borderRadius: 24,
        padding: 22,
        elevation: 3,
    },
    titulo: {
        color: "#713F35",
        fontSize: 24,
        fontWeight: "800",
    },
    descricao: {
        color: "#806D65",
        fontSize: 14,
        marginTop: 8,
        marginBottom: 24,
    },
    label: {
        color: "#713F35",
        fontSize: 14,
        fontWeight: "700",
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: "#E9D9D0",
        backgroundColor: "#FFFCF9",
        borderRadius: 12,
        paddingHorizontal: 14,
        paddingVertical: 14,
        fontSize: 15,
        color: "#49352F",
        marginBottom: 20,
    },
    botao: {
        backgroundColor: "#8E4F43",
        borderRadius: 12,
        paddingVertical: 16,
        alignItems: "center",
        marginTop: 4,
    },
    textoBotao: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "700",
    },
    linhaCadastro: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: 22,
    },
    textoCadastro: {
        color: "#806D65",
        fontSize: 13,
    },
    linkCadastro: {
        color: "#8E4F43",
        fontSize: 13,
        fontWeight: "800",
    },
});