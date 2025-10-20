import { motion } from "framer-motion";

/**
 * Team Member Card Component
 */
interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
  delay: number;
}

const TeamMemberCard = ({ name, role, imageUrl, delay }: TeamMemberProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(101, 67, 33, 0.2)" }}
      className="bg-cream p-6 rounded-2xl shadow-lg border-2 border-light-brown/30 hover:border-warm-brown transition-all duration-300"
    >
      {/* Profile Image */}
      <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-beige border-4 border-warm-brown/30">
        <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Name */}
      <h3 className="text-2xl font-bold text-dark-brown text-center mb-2">
        {name}
      </h3>

      {/* Role */}
      <p className="text-warm-brown text-center font-medium">{role}</p>

      {/* Decorative divider */}
      <div className="w-16 h-1 bg-warm-brown/30 mx-auto mt-4"></div>
    </motion.div>
  );
};

/**
 * Team Section Component
 *
 * Displays team members in a responsive grid layout.
 * Uses placeholder images from UI Avatars API.
 */
const Team = () => {
  const teamMembers = [
    {
      name: "Emma Thompson",
      role: "Head Librarian",
      imageUrl:
        "https://ui-avatars.com/api/?name=Emma+Thompson&background=8B7355&color=fff&size=200&bold=true",
    },
    {
      name: "James Wilson",
      role: "Digital Systems Manager",
      imageUrl:
        "https://ui-avatars.com/api/?name=James+Wilson&background=D2B48C&color=654321&size=200&bold=true",
    },
    {
      name: "Sofia Rodriguez",
      role: "Community Outreach",
      imageUrl:
        "https://ui-avatars.com/api/?name=Sofia+Rodriguez&background=F5DEB3&color=654321&size=200&bold=true",
    },
  ];

  return (
    <section className="relative min-h-screen py-20 px-4 bg-gradient-to-b from-parchment to-cream">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-dark-brown text-center mb-8"
        >
          Meet Our Team
        </motion.h2>

        {/* Decorative line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="h-1 bg-warm-brown mx-auto mb-16"
        ></motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={member.name}
              name={member.name}
              role={member.role}
              imageUrl={member.imageUrl}
              delay={0.2 * (index + 1)}
            />
          ))}
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.2 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16 text-6xl"
        >
          👥
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
