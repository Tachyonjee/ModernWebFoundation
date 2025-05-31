import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { COMPANY_VALUES } from "@/lib/constants";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            About WebApp Pro
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Learn about our mission, values, and the team behind the platform that's transforming web development.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We are a team of passionate developers, designers, and strategists dedicated to creating 
                exceptional digital experiences. With over a decade of combined experience, we've helped 
                hundreds of businesses transform their digital presence.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our mission is to empower businesses with cutting-edge technology solutions that drive 
                growth, improve efficiency, and create lasting value for their customers.
              </p>
              
              <div className="space-y-4">
                {COMPANY_VALUES.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className={`w-6 h-6 ${value.color} rounded-full flex items-center justify-center mt-1`}>
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{value.title}</h4>
                      <p className="text-gray-600 text-sm">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <Card className="bg-white shadow-2xl">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary rounded-lg"></div>
                      <div className="h-4 bg-gray-200 rounded flex-1"></div>
                    </div>
                    <div className="pl-11 space-y-3">
                      <div className="h-3 bg-gray-100 rounded w-4/5"></div>
                      <div className="h-3 bg-gray-100 rounded w-3/5"></div>
                      <div className="h-3 bg-primary/20 rounded w-2/3"></div>
                    </div>
                    <div className="flex items-center space-x-3 pt-4">
                      <div className="w-8 h-8 bg-green-500 rounded-lg"></div>
                      <div className="h-4 bg-gray-200 rounded flex-1"></div>
                    </div>
                    <div className="pl-11 space-y-3">
                      <div className="h-3 bg-gray-100 rounded w-3/4"></div>
                      <div className="h-3 bg-green-100 rounded w-1/2"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and client satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { value: "10+", label: "Years Experience", color: "text-blue-600" },
              { value: "500+", label: "Projects Completed", color: "text-green-600" },
              { value: "25+", label: "Team Members", color: "text-purple-600" },
              { value: "99.9%", label: "Client Satisfaction", color: "text-orange-600" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-xl shadow-lg"
              >
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
