question1 = "What is your name? "
puts question1
name = gets.chomp
puts "Welcome #{name}!"

question2 = "What is the Assignment name? "
puts question2
assignment = gets.chomp
puts "What grade did you get in #{assignment}?"

grade = gets.chomp
intgrade = grade.to_i
if intgrade >= 90
    puts "#{name} got an A in #{assignment}"
elsif intgrade >= 80 and intgrade <= 90
    puts "#{name} got a B in #{assignment}"
elsif intgrade >= 70 and intgrade <= 80
    puts "#{name} got a C in #{assignment}"
elsif intgrade >= 60 and intgrade <= 70
    puts "#{name} got a D in #{assignment}"
else
    puts "#{name} got an F in #{assignment}"
end