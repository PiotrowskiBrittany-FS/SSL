question1 = "What is your name? "
puts question1
name = gets.chomp
puts "Welcome #{name}!"
# Asks the user what their name is

question2 = "What is the Assignment name? "
puts question2
assignment = gets.chomp
puts "What grade did you get in #{assignment}?"
# Asks the user what their assignments name is

grade = gets.chomp
intgrade = grade.to_i
if intgrade >= 90
    puts "#{name} got an A in #{assignment}"
    # if anything above 90 is input, the letter grade will be an A
elsif intgrade >= 80 and intgrade <= 90
    puts "#{name} got a B in #{assignment}"
    # if anything between 80-90 is input, the letter grade will be an A
elsif intgrade >= 70 and intgrade <= 80
    puts "#{name} got a C in #{assignment}"
    # if anything between 70-80 is input, the letter grade will be an A
elsif intgrade >= 60 and intgrade <= 70
    puts "#{name} got a D in #{assignment}"
    # if anything between 60-70 is input, the letter grade will be an A
else
    puts "#{name} got an F in #{assignment}"
    # if anything below 60 is input, the letter grade will show an F
end
# ends the ruby program