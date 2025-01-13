import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";
import { MdCall, MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaBehance, FaDribbble, FaGithub, FaLink, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";


// Define styles for the PDF
const styles = StyleSheet.create({
  container: {
    padding: 16,
    fontFamily: "Helvetica",
    color: "#1e293b",
  },
  header: {
    textAlign: "center",
    marginBottom: 8,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  jobTitle: {
    fontSize: 18,
    textTransform: "capitalize",
  },
  contact: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 8,
    gap: 8,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    fontSize: 12,
  },
  socialLinks: {
    marginTop: 8,
    textAlign: "center",
  },
  socialLink: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    fontSize: 12,
  },
  profileSection: {
    marginTop: 16,
    borderTop: "2px solid #334155",
    paddingTop: 8,
  },
  sectionTitle: {
    fontWeight: "bold",
    marginBottom: 4,
    fontSize: 14,
    color: "#1e293b",
  },
  description: {
    fontSize: 12,
    textAlign: "justify",
    color: "#1e293b",
  },
});

const PersonalInfoPdf = ({ profile }) => {
    console.log(profile, "profile")
  return (
  <Document>
    <Page size="A4" style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.name}>{profile?.fullName}</Text>
        <Text style={styles.jobTitle}>{profile?.jobTitle}</Text>
      </View>

      {/* Contact Information */}
      <View style={styles.contact}>
        {profile?.email && (
          <View style={styles.contactItem}>
            <MdEmail />
            <Text>{profile.email}</Text>
          </View>
        )}
        {profile?.phone && (
          <View style={styles.contactItem}>
            <MdCall />
            <Text>{profile.phone}</Text>
          </View>
        )}
        {profile?.address && (
          <View style={styles.contactItem}>
            <FaLocationDot />
            <Text>{profile.address}</Text>
          </View>
        )}
      </View>

      {/* Social Links */}
      {profile?.socialLinks && (
        <View style={styles.socialLinks}>
          {profile.socialLinks.map((link) => (
            <View key={link?.id} style={styles.socialLink}>
              {link.name === "Website" && <FaLink />}
              {link.name === "GitHub" && <FaGithub />}
              {link.name === "LinkedIn" && <FaLinkedinIn />}
              {link.name === "Dribble" && <FaDribbble />}
              {link.name === "Behance" && <FaBehance />}
              {link.name === "Leetcode" && <SiLeetcode />}
              <Link src={link?.url}>{link?.username}</Link>
            </View>
          ))}
        </View>
      )}

      {/* Profile Section */}
      {profile?.description && (
        <View style={styles.profileSection}>
          <Text style={styles.sectionTitle}>Profile</Text>
          <Text style={styles.description}>{profile.description}</Text>
        </View>
      )}
    </Page>
  </Document>
)
};

export default PersonalInfoPdf;
