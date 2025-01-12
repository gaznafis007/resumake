import React, { useEffect, useRef } from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";
import jsPDF from "jspdf";
import { useDispatch, useSelector } from "react-redux";
import { downloadPdf } from "@/redux/features/pdfSlice";

// Define styles for the PDF
const styles = StyleSheet.create({
  container: {
    padding: 20,
    fontSize: 12,
    fontFamily: "Helvetica",
    color: "#333",
  },
  header: {
    textAlign: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 10,
    textTransform: "capitalize",
  },
  section: {
    marginTop: 15,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    borderBottomStyle: "solid",
    marginBottom: 5,
  },
  text: {
    marginBottom: 5,
  },
  link: {
    color: "#1a73e8",
  },
  list: {
    marginLeft: 10,
    marginTop: 5,
  },
  listItem: {
    marginBottom: 5,
  },
});


const ResumeOutputPDF = () => {
  const docRef = useRef()
const { profile, experiences, skills, educations, languages, certificates, interests, projects, courses, awards, organizations, publications, references,declaration, custom, pdf } = useSelector(
  (state) => state
);
const dispatch = useDispatch()
const generatePdf = () =>{
  // console.log('hello')
  if(docRef.current){
    const newPdf = new jsPDF()
    newPdf.html(docRef.current, {
      callback: (doc) =>{
        console.log('working')
        doc.save(`${profile?.fullName ? profile?.fullName : 'Resume'}.pdf`);
      }
    })
  }
}
  useEffect(() =>{
  if(pdf?.triggerDownload){
    generatePdf();
    dispatch(downloadPdf({status: false}))
  }
  
},[pdf.triggerDownload])
  return (
    <Document ref={docRef}>
      <Page size="A4" style={styles.container}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.title}>{profile?.fullName}</Text>
          <Text style={styles.subtitle}>{profile?.jobTitle}</Text>
          <View>
            {profile?.email && <Text style={styles.text}>Email: {profile.email}</Text>}
            {profile?.phone && <Text style={styles.text}>Phone: {profile.phone}</Text>}
            {profile?.address && <Text style={styles.text}>Address: {profile.address}</Text>}
          </View>
        </View>

        {/* Profile Section */}
        {profile?.description && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Profile</Text>
            <Text>{profile.description}</Text>
          </View>
        )}

        {/* Experience Section */}
        {experiences?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Experience</Text>
            {experiences.map((experience) => (
              <Text key={experience.id} style={styles.text}>
                {experience.role} at {experience.company} ({experience.duration})
              </Text>
            ))}
          </View>
        )}

        {/* Skills Section */}
        {skills?.expertise && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills</Text>
            <Text>{skills.expertise.join(", ")}</Text>
          </View>
        )}

        {/* Projects Section */}
        {projects?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Projects</Text>
            {projects.map((project) => (
              <Text key={project.id} style={styles.text}>
                {project.name}: {project.description}
              </Text>
            ))}
          </View>
        )}

        {/* Education Section */}
        {educations?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            {educations.map((education) => (
              <Text key={education.id} style={styles.text}>
                {education.degree}, {education.institution} ({education.year})
              </Text>
            ))}
          </View>
        )}

        {/* Languages Section */}
        {languages?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Languages</Text>
            <View style={styles.list}>
              {languages.map((language) => (
                <Text key={language.id} style={styles.listItem}>
                  {language.name} - {language.level}
                </Text>
              ))}
            </View>
          </View>
        )}

        {/* Interests Section */}
        {interests?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Interests</Text>
            <Text>{interests.join(", ")}</Text>
          </View>
        )}

        {/* References Section */}
        {references?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>References</Text>
            {references.map((reference) => (
              <Text key={reference.id} style={styles.text}>
                {reference.name}, {reference.contact}
              </Text>
            ))}
          </View>
        )}

        {/* Custom Section */}
        {custom?.name && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{custom.name}</Text>
            {custom.sections.map((section) => (
              <Text key={section.id} style={styles.text}>
                {section.content}
              </Text>
            ))}
          </View>
        )}

        {/* Declaration Section */}
        {declaration?.description && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Declaration</Text>
            <Text>{declaration.description}</Text>
          </View>
        )}
      </Page>
    </Document>
  );
};

export default ResumeOutputPDF;

