number = 1434567913
for i in number.downto(1)
	if i!=number && number%i == 0 && i%2 != 0 && i%3 != 0 && i%5 != 0 && i%7 != 0 && i%11 != 0 && i%13 != 0
		for x in 1..i/2
			if i%x == 0
			else				
				if x==i/2	
					puts "Largest prime factor of #{number} is: " + i.to_s
					number = 1
				end
			end
		end
	end
end