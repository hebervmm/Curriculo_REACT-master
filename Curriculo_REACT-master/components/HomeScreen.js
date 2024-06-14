import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView , TouchableOpacity ,Button,Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function HomeScreen({ navigation }) {
  return (
    
    <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Dados Pessoais</Text>
        <View style={styles.personalInfo}>
          <Image source={require('../assets/Profile.jpeg')} style={styles.profileImage} />
          <View style={styles.personalInfo}>
<View style={styles.infoRow}>
  <Text style={styles.label}>Nome:</Text>
  <Text>Héber Marinho</Text>
</View>
<View style={styles.infoRow}>
  <Text style={styles.label}>E-mail:</Text>
  <Text>heberlopes6@gmail.com</Text>
</View>
<View style={styles.infoRow}>
  <Text style={styles.label}>Telefone:</Text>
  <Text>(81) 99743-6936</Text>
</View>
</View>

        </View>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Objetivo</Text>
        <Text style={styles.objectiveText}>
          Sou um Bacharel em Direito em transição de carreira, atuando como Desenvolvedor web em busca de oportunidades para aplicar meus conhecimentos e habilidades
          no desenvolvimento de aplicações web inovadoras, proporcionando experiências excepcionais aos usuários.
        </Text>
      </View>

         <View style={styles.section}>
        <Text style={styles.sectionTitle}>Educação</Text>
        <Text><Text style={styles.bold}>Tecnologo em Analise e Desenvolvimento de sistemas</Text> - Faculdade Senac Pernambuco (2023 - 2025)</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Habilidades</Text>
        <Text>- HTML, CSS, JavaScript</Text>
        <Text>- React.js, Node.js</Text>
        <Text>- Git, GitHub</Text>
        <Text>- Design Responsivo</Text>
      </View>
    </View>
    <View style={styles.buttonContainer}>
          <Button
            title="Projetos"
            onPress={() => navigation.navigate('Projetos')}
          />
          
          <Button
            title="GitHub"
            onPress={() => Linking.openURL('https://github.com/hebervmm')}
            icon={
              <Icon
                name="github"
                type="font-awesome"
                size={15}
                color="white"
                iconStyle={{ marginRight: 10 }}
              />
            }
          />
      {/* Adicione mais botões para outras telas conforme necessário */}
    </View>
    </ScrollView>
  
  );
}
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingHorizontal: 20,
        paddingVertical: 30,
      },
      section: {
        marginBottom: 20,
      },
      sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      personalInfo: {
        marginBottom: 10,
      },
      profileImage: {
        width: 100,
        height: 100,
        borderRadius: 40,
        marginRight: 10,
      },
      infoText: {
        flex: 1,
        marginBottom: 5,
      },
      label: {
        fontWeight: 'bold',
        marginRight: 5,},
      infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: -15,
        marginTop:20 ,
      },
  objectiveText: {
    marginBottom: 10,
  },
  jobTitle: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  jobDetails: {
    marginBottom: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
});
export default HomeScreen;
