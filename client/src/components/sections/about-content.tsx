import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { COMPANY_VALUES } from "@/lib/constants";

export default function AboutContent() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Built for the Future
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our platform combines cutting-edge technology with intuitive design to create 
              exceptional digital experiences. Whether you're building a simple website or 
              a complex application, we provide the foundation you need to succeed.
            </p>
            
            <div className="space-y-4">
              {COMPANY_VALUES.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
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
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Modern development workspace illustration */}
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
            
            {/* Floating Stats Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-2xl p-6 border border-gray-100"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">10+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -top-8 -right-8 bg-white rounded-xl shadow-2xl p-6 border border-gray-100"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">25+</div>
                <div className="text-sm text-gray-600">Team Members</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
