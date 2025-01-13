import React, { useEffect, useRef } from 'react';
import { Page, Document, StyleSheet, Font, View } from '@react-pdf/renderer';
import { useDispatch, useSelector } from 'react-redux';
import PersonalInfoPdf from './PersonalInfoPdf';
import jsPDF from 'jspdf';



Font.register({
  family: 'Roboto',
  fonts: [
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf', fontWeight: 300 },
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf', fontWeight: 400 },
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf', fontWeight: 500 },
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf', fontWeight: 700 },
  ],
});

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Roboto',
    fontSize: 11,
    paddingTop: 30,
    paddingLeft: 60,
    paddingRight: 60,
    lineHeight: 1.5,
    flexDirection: 'column',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const PdfOutput = () => {
  const resumeRef = useRef()
  const dispatch = useDispatch()
  const {  profile, experiences, skills, educations, languages, certificates, interests, projects, courses, awards, organizations, publications, references, declaration, custom, pdf } = useSelector(
    (state) => state
  );
const generatePdf = () =>{
    if(resumeRef.current){
      const newPdf = new jsPDF();
      newPdf.html(resumeRef.current, {
        callback: (doc) =>{
          doc.save(`${profile?.fullName ? profile?.fullName : 'Resume'}.pdf`)
        },
        x: 0,
        y: 0,
        // autoPaging: 'text',
        // html2canvas: {
        //   scale: 3
        // },
        width: 190,
        windowWidth: resumeRef.current.scrollWidth
      })
    }
    }
  useEffect(() =>{
    if(pdf.triggerDownload){
      generatePdf()
      dispatch(downloadPdf({status:false}))
    }
  }, [pdf.triggerDownload])
  return (
    <Document ref={resumeRef}>
      <Page size="A4" style={styles.page}>
        <PersonalInfoPdf profile={profile} />
        {/* {experiences[0] && <Experience experiences={experiences} />} */}
        {/* {skills.expertise && <Skills skills={skills} />}
        {projects[0] && <Project projects={projects} />}
        {educations[0] && <Education educations={educations} />}
        {certificates[0] && <Certificate certificates={certificates} />}
        {courses[0] && <Course courses={courses} />}
        {languages[0] && <Language languages={languages} />}
        {declaration.description && <Declaration declaration={declaration} />} */}
      </Page>
    </Document>
  );
};

export default PdfOutput;

