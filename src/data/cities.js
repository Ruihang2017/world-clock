// Cities data with their timezones (UTC offset in hours)
export const CITIES_DATA = [
	// United States
	{ name: 'New York', timezone: -5, country: 'USA' },
	{ name: 'Los Angeles', timezone: -8, country: 'USA' },
	{ name: 'Chicago', timezone: -6, country: 'USA' },
	{ name: 'Houston', timezone: -6, country: 'USA' },
	{ name: 'Phoenix', timezone: -7, country: 'USA' },
	{ name: 'Philadelphia', timezone: -5, country: 'USA' },
	{ name: 'San Antonio', timezone: -6, country: 'USA' },
	{ name: 'San Diego', timezone: -8, country: 'USA' },
	{ name: 'Dallas', timezone: -6, country: 'USA' },
	{ name: 'San Jose', timezone: -8, country: 'USA' },
	{ name: 'Austin', timezone: -6, country: 'USA' },
	{ name: 'Jacksonville', timezone: -5, country: 'USA' },
	{ name: 'San Francisco', timezone: -8, country: 'USA' },
	{ name: 'Columbus', timezone: -5, country: 'USA' },
	{ name: 'Indianapolis', timezone: -5, country: 'USA' },
	{ name: 'Fort Worth', timezone: -6, country: 'USA' },
	{ name: 'Charlotte', timezone: -5, country: 'USA' },
	{ name: 'Seattle', timezone: -8, country: 'USA' },
	{ name: 'Denver', timezone: -7, country: 'USA' },
	{ name: 'Washington DC', timezone: -5, country: 'USA' },
	{ name: 'Boston', timezone: -5, country: 'USA' },
	{ name: 'Nashville', timezone: -6, country: 'USA' },
	{ name: 'Baltimore', timezone: -5, country: 'USA' },
	{ name: 'Oklahoma City', timezone: -6, country: 'USA' },
	{ name: 'Portland', timezone: -8, country: 'USA' },
	{ name: 'Las Vegas', timezone: -8, country: 'USA' },
	{ name: 'Louisville', timezone: -5, country: 'USA' },
	{ name: 'Milwaukee', timezone: -6, country: 'USA' },
	{ name: 'Albuquerque', timezone: -7, country: 'USA' },
	{ name: 'Tucson', timezone: -7, country: 'USA' },
	{ name: 'Fresno', timezone: -8, country: 'USA' },
	{ name: 'Sacramento', timezone: -8, country: 'USA' },
	{ name: 'Mesa', timezone: -7, country: 'USA' },
	{ name: 'Kansas City', timezone: -6, country: 'USA' },
	{ name: 'Atlanta', timezone: -5, country: 'USA' },
	{ name: 'Long Beach', timezone: -8, country: 'USA' },
	{ name: 'Colorado Springs', timezone: -7, country: 'USA' },
	{ name: 'Raleigh', timezone: -5, country: 'USA' },
	{ name: 'Miami', timezone: -5, country: 'USA' },
	{ name: 'Virginia Beach', timezone: -5, country: 'USA' },
	{ name: 'Omaha', timezone: -6, country: 'USA' },
	{ name: 'Oakland', timezone: -8, country: 'USA' },
	{ name: 'Minneapolis', timezone: -6, country: 'USA' },
	{ name: 'Tulsa', timezone: -6, country: 'USA' },
	{ name: 'Arlington', timezone: -6, country: 'USA' },
	{ name: 'Tampa', timezone: -5, country: 'USA' },
	{ name: 'New Orleans', timezone: -6, country: 'USA' },
	{ name: 'Wichita', timezone: -6, country: 'USA' },
	{ name: 'Cleveland', timezone: -5, country: 'USA' },
	{ name: 'Bakersfield', timezone: -8, country: 'USA' },

	// Canada
	{ name: 'Toronto', timezone: -5, country: 'Canada' },
	{ name: 'Montreal', timezone: -5, country: 'Canada' },
	{ name: 'Vancouver', timezone: -8, country: 'Canada' },
	{ name: 'Calgary', timezone: -7, country: 'Canada' },
	{ name: 'Edmonton', timezone: -7, country: 'Canada' },
	{ name: 'Ottawa', timezone: -5, country: 'Canada' },
	{ name: 'Winnipeg', timezone: -6, country: 'Canada' },
	{ name: 'Quebec City', timezone: -5, country: 'Canada' },
	{ name: 'Hamilton', timezone: -5, country: 'Canada' },
	{ name: 'Kitchener', timezone: -5, country: 'Canada' },
	{ name: 'London Ontario', timezone: -5, country: 'Canada' },
	{ name: 'Halifax', timezone: -4, country: 'Canada' },
	{ name: 'Victoria', timezone: -8, country: 'Canada' },
	{ name: 'Windsor', timezone: -5, country: 'Canada' },
	{ name: 'Saskatoon', timezone: -6, country: 'Canada' },
	{ name: 'Regina', timezone: -6, country: 'Canada' },
	{ name: 'St. Johns', timezone: -3.5, country: 'Canada' },

	// Mexico
	{ name: 'Mexico City', timezone: -6, country: 'Mexico' },
	{ name: 'Guadalajara', timezone: -6, country: 'Mexico' },
	{ name: 'Monterrey', timezone: -6, country: 'Mexico' },
	{ name: 'Puebla', timezone: -6, country: 'Mexico' },
	{ name: 'Tijuana', timezone: -8, country: 'Mexico' },
	{ name: 'León', timezone: -6, country: 'Mexico' },
	{ name: 'Juárez', timezone: -7, country: 'Mexico' },
	{ name: 'Torreón', timezone: -6, country: 'Mexico' },
	{ name: 'Querétaro', timezone: -6, country: 'Mexico' },
	{ name: 'San Luis Potosí', timezone: -6, country: 'Mexico' },
	{ name: 'Mérida', timezone: -6, country: 'Mexico' },
	{ name: 'Mexicali', timezone: -8, country: 'Mexico' },
	{ name: 'Aguascalientes', timezone: -6, country: 'Mexico' },
	{ name: 'Acapulco', timezone: -6, country: 'Mexico' },
	{ name: 'Cuernavaca', timezone: -6, country: 'Mexico' },

	// Brazil
	{ name: 'São Paulo', timezone: -3, country: 'Brazil' },
	{ name: 'Rio de Janeiro', timezone: -3, country: 'Brazil' },
	{ name: 'Brasília', timezone: -3, country: 'Brazil' },
	{ name: 'Salvador', timezone: -3, country: 'Brazil' },
	{ name: 'Fortaleza', timezone: -3, country: 'Brazil' },
	{ name: 'Belo Horizonte', timezone: -3, country: 'Brazil' },
	{ name: 'Manaus', timezone: -4, country: 'Brazil' },
	{ name: 'Curitiba', timezone: -3, country: 'Brazil' },
	{ name: 'Recife', timezone: -3, country: 'Brazil' },
	{ name: 'Belém', timezone: -3, country: 'Brazil' },
	{ name: 'Porto Alegre', timezone: -3, country: 'Brazil' },
	{ name: 'Goiânia', timezone: -3, country: 'Brazil' },
	{ name: 'Guarulhos', timezone: -3, country: 'Brazil' },
	{ name: 'Campinas', timezone: -3, country: 'Brazil' },
	{ name: 'São Luís', timezone: -3, country: 'Brazil' },
	{ name: 'Maceió', timezone: -3, country: 'Brazil' },
	{ name: 'Duque de Caxias', timezone: -3, country: 'Brazil' },

	// Argentina
	{ name: 'Buenos Aires', timezone: -3, country: 'Argentina' },
	{ name: 'Córdoba', timezone: -3, country: 'Argentina' },
	{ name: 'Rosario', timezone: -3, country: 'Argentina' },
	{ name: 'Mendoza', timezone: -3, country: 'Argentina' },
	{ name: 'San Miguel de Tucumán', timezone: -3, country: 'Argentina' },
	{ name: 'Mar del Plata', timezone: -3, country: 'Argentina' },
	{ name: 'Salta', timezone: -3, country: 'Argentina' },
	{ name: 'Santa Fe', timezone: -3, country: 'Argentina' },

	// Chile
	{ name: 'Santiago', timezone: -4, country: 'Chile' },
	{ name: 'Valparaíso', timezone: -4, country: 'Chile' },
	{ name: 'Concepción', timezone: -4, country: 'Chile' },
	{ name: 'Antofagasta', timezone: -4, country: 'Chile' },
	{ name: 'Viña del Mar', timezone: -4, country: 'Chile' },

	// Colombia
	{ name: 'Bogotá', timezone: -5, country: 'Colombia' },
	{ name: 'Medellín', timezone: -5, country: 'Colombia' },
	{ name: 'Cali', timezone: -5, country: 'Colombia' },
	{ name: 'Barranquilla', timezone: -5, country: 'Colombia' },
	{ name: 'Cartagena', timezone: -5, country: 'Colombia' },

	// Peru
	{ name: 'Lima', timezone: -5, country: 'Peru' },
	{ name: 'Arequipa', timezone: -5, country: 'Peru' },
	{ name: 'Trujillo', timezone: -5, country: 'Peru' },
	{ name: 'Chiclayo', timezone: -5, country: 'Peru' },

	// Venezuela
	{ name: 'Caracas', timezone: -4, country: 'Venezuela' },
	{ name: 'Maracaibo', timezone: -4, country: 'Venezuela' },
	{ name: 'Valencia', timezone: -4, country: 'Venezuela' },
	{ name: 'Barquisimeto', timezone: -4, country: 'Venezuela' },

	// Ecuador
	{ name: 'Quito', timezone: -5, country: 'Ecuador' },
	{ name: 'Guayaquil', timezone: -5, country: 'Ecuador' },

	// Bolivia
	{ name: 'La Paz', timezone: -4, country: 'Bolivia' },
	{ name: 'Santa Cruz', timezone: -4, country: 'Bolivia' },

	// Paraguay
	{ name: 'Asunción', timezone: -3, country: 'Paraguay' },

	// Uruguay
	{ name: 'Montevideo', timezone: -3, country: 'Uruguay' },

	// United Kingdom
	{ name: 'London', timezone: 0, country: 'UK' },
	{ name: 'Birmingham', timezone: 0, country: 'UK' },
	{ name: 'Manchester', timezone: 0, country: 'UK' },
	{ name: 'Glasgow', timezone: 0, country: 'UK' },
	{ name: 'Liverpool', timezone: 0, country: 'UK' },
	{ name: 'Leeds', timezone: 0, country: 'UK' },
	{ name: 'Sheffield', timezone: 0, country: 'UK' },
	{ name: 'Edinburgh', timezone: 0, country: 'UK' },
	{ name: 'Bristol', timezone: 0, country: 'UK' },
	{ name: 'Cardiff', timezone: 0, country: 'UK' },
	{ name: 'Belfast', timezone: 0, country: 'UK' },
	{ name: 'Newcastle', timezone: 0, country: 'UK' },

	// Germany
	{ name: 'Berlin', timezone: 1, country: 'Germany' },
	{ name: 'Hamburg', timezone: 1, country: 'Germany' },
	{ name: 'Munich', timezone: 1, country: 'Germany' },
	{ name: 'Cologne', timezone: 1, country: 'Germany' },
	{ name: 'Frankfurt', timezone: 1, country: 'Germany' },
	{ name: 'Stuttgart', timezone: 1, country: 'Germany' },
	{ name: 'Düsseldorf', timezone: 1, country: 'Germany' },
	{ name: 'Dortmund', timezone: 1, country: 'Germany' },
	{ name: 'Essen', timezone: 1, country: 'Germany' },
	{ name: 'Leipzig', timezone: 1, country: 'Germany' },
	{ name: 'Bremen', timezone: 1, country: 'Germany' },
	{ name: 'Dresden', timezone: 1, country: 'Germany' },
	{ name: 'Hanover', timezone: 1, country: 'Germany' },
	{ name: 'Nuremberg', timezone: 1, country: 'Germany' },

	// France
	{ name: 'Paris', timezone: 1, country: 'France' },
	{ name: 'Marseille', timezone: 1, country: 'France' },
	{ name: 'Lyon', timezone: 1, country: 'France' },
	{ name: 'Toulouse', timezone: 1, country: 'France' },
	{ name: 'Nice', timezone: 1, country: 'France' },
	{ name: 'Nantes', timezone: 1, country: 'France' },
	{ name: 'Strasbourg', timezone: 1, country: 'France' },
	{ name: 'Montpellier', timezone: 1, country: 'France' },
	{ name: 'Bordeaux', timezone: 1, country: 'France' },
	{ name: 'Lille', timezone: 1, country: 'France' },
	{ name: 'Rennes', timezone: 1, country: 'France' },
	{ name: 'Reims', timezone: 1, country: 'France' },

	// Italy
	{ name: 'Rome', timezone: 1, country: 'Italy' },
	{ name: 'Milan', timezone: 1, country: 'Italy' },
	{ name: 'Naples', timezone: 1, country: 'Italy' },
	{ name: 'Turin', timezone: 1, country: 'Italy' },
	{ name: 'Palermo', timezone: 1, country: 'Italy' },
	{ name: 'Genoa', timezone: 1, country: 'Italy' },
	{ name: 'Bologna', timezone: 1, country: 'Italy' },
	{ name: 'Florence', timezone: 1, country: 'Italy' },
	{ name: 'Bari', timezone: 1, country: 'Italy' },
	{ name: 'Catania', timezone: 1, country: 'Italy' },
	{ name: 'Venice', timezone: 1, country: 'Italy' },
	{ name: 'Verona', timezone: 1, country: 'Italy' },

	// Spain
	{ name: 'Madrid', timezone: 1, country: 'Spain' },
	{ name: 'Barcelona', timezone: 1, country: 'Spain' },
	{ name: 'Valencia', timezone: 1, country: 'Spain' },
	{ name: 'Seville', timezone: 1, country: 'Spain' },
	{ name: 'Zaragoza', timezone: 1, country: 'Spain' },
	{ name: 'Málaga', timezone: 1, country: 'Spain' },
	{ name: 'Murcia', timezone: 1, country: 'Spain' },
	{ name: 'Palma', timezone: 1, country: 'Spain' },
	{ name: 'Las Palmas', timezone: 0, country: 'Spain' },
	{ name: 'Bilbao', timezone: 1, country: 'Spain' },

	// Netherlands
	{ name: 'Amsterdam', timezone: 1, country: 'Netherlands' },
	{ name: 'Rotterdam', timezone: 1, country: 'Netherlands' },
	{ name: 'The Hague', timezone: 1, country: 'Netherlands' },
	{ name: 'Utrecht', timezone: 1, country: 'Netherlands' },
	{ name: 'Eindhoven', timezone: 1, country: 'Netherlands' },
	{ name: 'Tilburg', timezone: 1, country: 'Netherlands' },
	{ name: 'Groningen', timezone: 1, country: 'Netherlands' },

	// Belgium
	{ name: 'Brussels', timezone: 1, country: 'Belgium' },
	{ name: 'Antwerp', timezone: 1, country: 'Belgium' },
	{ name: 'Ghent', timezone: 1, country: 'Belgium' },
	{ name: 'Charleroi', timezone: 1, country: 'Belgium' },
	{ name: 'Liège', timezone: 1, country: 'Belgium' },
	{ name: 'Bruges', timezone: 1, country: 'Belgium' },

	// Switzerland
	{ name: 'Zurich', timezone: 1, country: 'Switzerland' },
	{ name: 'Geneva', timezone: 1, country: 'Switzerland' },
	{ name: 'Basel', timezone: 1, country: 'Switzerland' },
	{ name: 'Bern', timezone: 1, country: 'Switzerland' },
	{ name: 'Lausanne', timezone: 1, country: 'Switzerland' },

	// Austria
	{ name: 'Vienna', timezone: 1, country: 'Austria' },
	{ name: 'Graz', timezone: 1, country: 'Austria' },
	{ name: 'Linz', timezone: 1, country: 'Austria' },
	{ name: 'Salzburg', timezone: 1, country: 'Austria' },
	{ name: 'Innsbruck', timezone: 1, country: 'Austria' },

	// Portugal
	{ name: 'Lisbon', timezone: 0, country: 'Portugal' },
	{ name: 'Porto', timezone: 0, country: 'Portugal' },
	{ name: 'Braga', timezone: 0, country: 'Portugal' },
	{ name: 'Coimbra', timezone: 0, country: 'Portugal' },

	// Poland
	{ name: 'Warsaw', timezone: 1, country: 'Poland' },
	{ name: 'Kraków', timezone: 1, country: 'Poland' },
	{ name: 'Łódź', timezone: 1, country: 'Poland' },
	{ name: 'Wrocław', timezone: 1, country: 'Poland' },
	{ name: 'Poznań', timezone: 1, country: 'Poland' },
	{ name: 'Gdańsk', timezone: 1, country: 'Poland' },

	// Czech Republic
	{ name: 'Prague', timezone: 1, country: 'Czech Republic' },
	{ name: 'Brno', timezone: 1, country: 'Czech Republic' },
	{ name: 'Ostrava', timezone: 1, country: 'Czech Republic' },

	// Hungary
	{ name: 'Budapest', timezone: 1, country: 'Hungary' },
	{ name: 'Debrecen', timezone: 1, country: 'Hungary' },
	{ name: 'Szeged', timezone: 1, country: 'Hungary' },

	// Slovakia
	{ name: 'Bratislava', timezone: 1, country: 'Slovakia' },
	{ name: 'Košice', timezone: 1, country: 'Slovakia' },

	// Romania
	{ name: 'Bucharest', timezone: 2, country: 'Romania' },
	{ name: 'Cluj-Napoca', timezone: 2, country: 'Romania' },
	{ name: 'Timișoara', timezone: 2, country: 'Romania' },
	{ name: 'Iași', timezone: 2, country: 'Romania' },

	// Bulgaria
	{ name: 'Sofia', timezone: 2, country: 'Bulgaria' },
	{ name: 'Plovdiv', timezone: 2, country: 'Bulgaria' },
	{ name: 'Varna', timezone: 2, country: 'Bulgaria' },

	// Greece
	{ name: 'Athens', timezone: 2, country: 'Greece' },
	{ name: 'Thessaloniki', timezone: 2, country: 'Greece' },
	{ name: 'Patras', timezone: 2, country: 'Greece' },

	// Croatia
	{ name: 'Zagreb', timezone: 1, country: 'Croatia' },
	{ name: 'Split', timezone: 1, country: 'Croatia' },
	{ name: 'Rijeka', timezone: 1, country: 'Croatia' },

	// Serbia
	{ name: 'Belgrade', timezone: 1, country: 'Serbia' },
	{ name: 'Novi Sad', timezone: 1, country: 'Serbia' },
	{ name: 'Niš', timezone: 1, country: 'Serbia' },

	// Slovenia
	{ name: 'Ljubljana', timezone: 1, country: 'Slovenia' },
	{ name: 'Maribor', timezone: 1, country: 'Slovenia' },

	// Sweden
	{ name: 'Stockholm', timezone: 1, country: 'Sweden' },
	{ name: 'Gothenburg', timezone: 1, country: 'Sweden' },
	{ name: 'Malmö', timezone: 1, country: 'Sweden' },
	{ name: 'Uppsala', timezone: 1, country: 'Sweden' },

	// Norway
	{ name: 'Oslo', timezone: 1, country: 'Norway' },
	{ name: 'Bergen', timezone: 1, country: 'Norway' },
	{ name: 'Trondheim', timezone: 1, country: 'Norway' },
	{ name: 'Stavanger', timezone: 1, country: 'Norway' },

	// Denmark
	{ name: 'Copenhagen', timezone: 1, country: 'Denmark' },
	{ name: 'Aarhus', timezone: 1, country: 'Denmark' },
	{ name: 'Odense', timezone: 1, country: 'Denmark' },
	{ name: 'Aalborg', timezone: 1, country: 'Denmark' },

	// Finland
	{ name: 'Helsinki', timezone: 2, country: 'Finland' },
	{ name: 'Espoo', timezone: 2, country: 'Finland' },
	{ name: 'Tampere', timezone: 2, country: 'Finland' },
	{ name: 'Turku', timezone: 2, country: 'Finland' },

	// Iceland
	{ name: 'Reykjavik', timezone: 0, country: 'Iceland' },

	// Ireland
	{ name: 'Dublin', timezone: 0, country: 'Ireland' },
	{ name: 'Cork', timezone: 0, country: 'Ireland' },
	{ name: 'Limerick', timezone: 0, country: 'Ireland' },
	{ name: 'Galway', timezone: 0, country: 'Ireland' },

	// Russia
	{ name: 'Moscow', timezone: 3, country: 'Russia' },
	{ name: 'Saint Petersburg', timezone: 3, country: 'Russia' },
	{ name: 'Novosibirsk', timezone: 7, country: 'Russia' },
	{ name: 'Yekaterinburg', timezone: 5, country: 'Russia' },
	{ name: 'Nizhny Novgorod', timezone: 3, country: 'Russia' },
	{ name: 'Kazan', timezone: 3, country: 'Russia' },
	{ name: 'Chelyabinsk', timezone: 5, country: 'Russia' },
	{ name: 'Omsk', timezone: 6, country: 'Russia' },
	{ name: 'Samara', timezone: 4, country: 'Russia' },
	{ name: 'Rostov-on-Don', timezone: 3, country: 'Russia' },
	{ name: 'Ufa', timezone: 5, country: 'Russia' },
	{ name: 'Krasnoyarsk', timezone: 7, country: 'Russia' },
	{ name: 'Perm', timezone: 5, country: 'Russia' },
	{ name: 'Voronezh', timezone: 3, country: 'Russia' },
	{ name: 'Volgograd', timezone: 4, country: 'Russia' },
	{ name: 'Krasnodar', timezone: 3, country: 'Russia' },
	{ name: 'Saratov', timezone: 4, country: 'Russia' },
	{ name: 'Tyumen', timezone: 5, country: 'Russia' },
	{ name: 'Tolyatti', timezone: 4, country: 'Russia' },
	{ name: 'Izhevsk', timezone: 4, country: 'Russia' },
	{ name: 'Vladivostok', timezone: 10, country: 'Russia' },

	// Ukraine
	{ name: 'Kyiv', timezone: 2, country: 'Ukraine' },
	{ name: 'Kharkiv', timezone: 2, country: 'Ukraine' },
	{ name: 'Odesa', timezone: 2, country: 'Ukraine' },
	{ name: 'Dnipro', timezone: 2, country: 'Ukraine' },
	{ name: 'Donetsk', timezone: 2, country: 'Ukraine' },
	{ name: 'Zaporizhzhia', timezone: 2, country: 'Ukraine' },
	{ name: 'Lviv', timezone: 2, country: 'Ukraine' },

	// Belarus
	{ name: 'Minsk', timezone: 3, country: 'Belarus' },
	{ name: 'Gomel', timezone: 3, country: 'Belarus' },
	{ name: 'Mogilev', timezone: 3, country: 'Belarus' },

	// Turkey
	{ name: 'Istanbul', timezone: 3, country: 'Turkey' },
	{ name: 'Ankara', timezone: 3, country: 'Turkey' },
	{ name: 'Izmir', timezone: 3, country: 'Turkey' },
	{ name: 'Bursa', timezone: 3, country: 'Turkey' },
	{ name: 'Adana', timezone: 3, country: 'Turkey' },
	{ name: 'Gaziantep', timezone: 3, country: 'Turkey' },
	{ name: 'Konya', timezone: 3, country: 'Turkey' },

	// China
	{ name: 'Beijing', timezone: 8, country: 'China' },
	{ name: 'Shanghai', timezone: 8, country: 'China' },
	{ name: 'Guangzhou', timezone: 8, country: 'China' },
	{ name: 'Shenzhen', timezone: 8, country: 'China' },
	{ name: 'Tianjin', timezone: 8, country: 'China' },
	{ name: 'Wuhan', timezone: 8, country: 'China' },
	{ name: 'Dongguan', timezone: 8, country: 'China' },
	{ name: 'Chengdu', timezone: 8, country: 'China' },
	{ name: 'Nanjing', timezone: 8, country: 'China' },
	{ name: 'Foshan', timezone: 8, country: 'China' },
	{ name: 'Shenyang', timezone: 8, country: 'China' },
	{ name: 'Qingdao', timezone: 8, country: 'China' },
	{ name: 'Xian', timezone: 8, country: 'China' },
	{ name: 'Dalian', timezone: 8, country: 'China' },
	{ name: 'Zhengzhou', timezone: 8, country: 'China' },
	{ name: 'Shantou', timezone: 8, country: 'China' },
	{ name: 'Jinan', timezone: 8, country: 'China' },
	{ name: 'Changchun', timezone: 8, country: 'China' },
	{ name: 'Kunming', timezone: 8, country: 'China' },
	{ name: 'Changsha', timezone: 8, country: 'China' },
	{ name: 'Taiyuan', timezone: 8, country: 'China' },
	{ name: 'Xiamen', timezone: 8, country: 'China' },
	{ name: 'Shijiazhuang', timezone: 8, country: 'China' },
	{ name: 'Suzhou', timezone: 8, country: 'China' },
	{ name: 'Wenzhou', timezone: 8, country: 'China' },
	{ name: 'Hangzhou', timezone: 8, country: 'China' },

	// Hong Kong
	{ name: 'Hong Kong', timezone: 8, country: 'Hong Kong' },

	// Taiwan
	{ name: 'Taipei', timezone: 8, country: 'Taiwan' },
	{ name: 'Kaohsiung', timezone: 8, country: 'Taiwan' },
	{ name: 'Taichung', timezone: 8, country: 'Taiwan' },
	{ name: 'Tainan', timezone: 8, country: 'Taiwan' },

	// Japan
	{ name: 'Tokyo', timezone: 9, country: 'Japan' },
	{ name: 'Yokohama', timezone: 9, country: 'Japan' },
	{ name: 'Osaka', timezone: 9, country: 'Japan' },
	{ name: 'Nagoya', timezone: 9, country: 'Japan' },
	{ name: 'Sapporo', timezone: 9, country: 'Japan' },
	{ name: 'Fukuoka', timezone: 9, country: 'Japan' },
	{ name: 'Kobe', timezone: 9, country: 'Japan' },
	{ name: 'Kawasaki', timezone: 9, country: 'Japan' },
	{ name: 'Kyoto', timezone: 9, country: 'Japan' },
	{ name: 'Saitama', timezone: 9, country: 'Japan' },
	{ name: 'Hiroshima', timezone: 9, country: 'Japan' },
	{ name: 'Sendai', timezone: 9, country: 'Japan' },
	{ name: 'Kitakyushu', timezone: 9, country: 'Japan' },
	{ name: 'Chiba', timezone: 9, country: 'Japan' },

	// South Korea
	{ name: 'Seoul', timezone: 9, country: 'South Korea' },
	{ name: 'Busan', timezone: 9, country: 'South Korea' },
	{ name: 'Incheon', timezone: 9, country: 'South Korea' },
	{ name: 'Daegu', timezone: 9, country: 'South Korea' },
	{ name: 'Daejeon', timezone: 9, country: 'South Korea' },
	{ name: 'Gwangju', timezone: 9, country: 'South Korea' },
	{ name: 'Suwon', timezone: 9, country: 'South Korea' },
	{ name: 'Ulsan', timezone: 9, country: 'South Korea' },

	// North Korea
	{ name: 'Pyongyang', timezone: 9, country: 'North Korea' },

	// Mongolia
	{ name: 'Ulaanbaatar', timezone: 8, country: 'Mongolia' },

	// India
	{ name: 'Mumbai', timezone: 5.5, country: 'India' },
	{ name: 'Delhi', timezone: 5.5, country: 'India' },
	{ name: 'Bangalore', timezone: 5.5, country: 'India' },
	{ name: 'Hyderabad', timezone: 5.5, country: 'India' },
	{ name: 'Ahmedabad', timezone: 5.5, country: 'India' },
	{ name: 'Chennai', timezone: 5.5, country: 'India' },
	{ name: 'Kolkata', timezone: 5.5, country: 'India' },
	{ name: 'Surat', timezone: 5.5, country: 'India' },
	{ name: 'Pune', timezone: 5.5, country: 'India' },
	{ name: 'Jaipur', timezone: 5.5, country: 'India' },
	{ name: 'Lucknow', timezone: 5.5, country: 'India' },
	{ name: 'Kanpur', timezone: 5.5, country: 'India' },
	{ name: 'Nagpur', timezone: 5.5, country: 'India' },
	{ name: 'Indore', timezone: 5.5, country: 'India' },
	{ name: 'Thane', timezone: 5.5, country: 'India' },
	{ name: 'Bhopal', timezone: 5.5, country: 'India' },
	{ name: 'Visakhapatnam', timezone: 5.5, country: 'India' },
	{ name: 'Pimpri-Chinchwad', timezone: 5.5, country: 'India' },
	{ name: 'Patna', timezone: 5.5, country: 'India' },
	{ name: 'Vadodara', timezone: 5.5, country: 'India' },
	{ name: 'Ghaziabad', timezone: 5.5, country: 'India' },
	{ name: 'Ludhiana', timezone: 5.5, country: 'India' },
	{ name: 'Agra', timezone: 5.5, country: 'India' },
	{ name: 'Nashik', timezone: 5.5, country: 'India' },
	{ name: 'Faridabad', timezone: 5.5, country: 'India' },
	{ name: 'Meerut', timezone: 5.5, country: 'India' },
	{ name: 'Rajkot', timezone: 5.5, country: 'India' },
	{ name: 'Kalyan-Dombivali', timezone: 5.5, country: 'India' },
	{ name: 'Vasai-Virar', timezone: 5.5, country: 'India' },
	{ name: 'Varanasi', timezone: 5.5, country: 'India' },
	{ name: 'Srinagar', timezone: 5.5, country: 'India' },
	{ name: 'Aurangabad', timezone: 5.5, country: 'India' },
	{ name: 'Dhanbad', timezone: 5.5, country: 'India' },
	{ name: 'Amritsar', timezone: 5.5, country: 'India' },
	{ name: 'Navi Mumbai', timezone: 5.5, country: 'India' },
	{ name: 'Allahabad', timezone: 5.5, country: 'India' },
	{ name: 'Ranchi', timezone: 5.5, country: 'India' },
	{ name: 'Howrah', timezone: 5.5, country: 'India' },
	{ name: 'Coimbatore', timezone: 5.5, country: 'India' },
	{ name: 'Jabalpur', timezone: 5.5, country: 'India' },
	{ name: 'Gwalior', timezone: 5.5, country: 'India' },
	{ name: 'Vijayawada', timezone: 5.5, country: 'India' },
	{ name: 'Jodhpur', timezone: 5.5, country: 'India' },
	{ name: 'Madurai', timezone: 5.5, country: 'India' },
	{ name: 'Raipur', timezone: 5.5, country: 'India' },
	{ name: 'Kota', timezone: 5.5, country: 'India' },
	{ name: 'Chandigarh', timezone: 5.5, country: 'India' },
	{ name: 'Gurgaon', timezone: 5.5, country: 'India' },

	// Pakistan
	{ name: 'Karachi', timezone: 5, country: 'Pakistan' },
	{ name: 'Lahore', timezone: 5, country: 'Pakistan' },
	{ name: 'Faisalabad', timezone: 5, country: 'Pakistan' },
	{ name: 'Rawalpindi', timezone: 5, country: 'Pakistan' },
	{ name: 'Gujranwala', timezone: 5, country: 'Pakistan' },
	{ name: 'Peshawar', timezone: 5, country: 'Pakistan' },
	{ name: 'Multan', timezone: 5, country: 'Pakistan' },
	{ name: 'Islamabad', timezone: 5, country: 'Pakistan' },
	{ name: 'Quetta', timezone: 5, country: 'Pakistan' },
	{ name: 'Bahawalpur', timezone: 5, country: 'Pakistan' },

	// Bangladesh
	{ name: 'Dhaka', timezone: 6, country: 'Bangladesh' },
	{ name: 'Chittagong', timezone: 6, country: 'Bangladesh' },
	{ name: 'Khulna', timezone: 6, country: 'Bangladesh' },
	{ name: 'Rajshahi', timezone: 6, country: 'Bangladesh' },
	{ name: 'Sylhet', timezone: 6, country: 'Bangladesh' },

	// Sri Lanka
	{ name: 'Colombo', timezone: 5.5, country: 'Sri Lanka' },
	{ name: 'Dehiwala-Mount Lavinia', timezone: 5.5, country: 'Sri Lanka' },
	{ name: 'Moratuwa', timezone: 5.5, country: 'Sri Lanka' },

	// Nepal
	{ name: 'Kathmandu', timezone: 5.75, country: 'Nepal' },
	{ name: 'Pokhara', timezone: 5.75, country: 'Nepal' },

	// Bhutan
	{ name: 'Thimphu', timezone: 6, country: 'Bhutan' },

	// Myanmar
	{ name: 'Yangon', timezone: 6.5, country: 'Myanmar' },
	{ name: 'Mandalay', timezone: 6.5, country: 'Myanmar' },
	{ name: 'Naypyidaw', timezone: 6.5, country: 'Myanmar' },

	// Thailand
	{ name: 'Bangkok', timezone: 7, country: 'Thailand' },
	{ name: 'Nonthaburi', timezone: 7, country: 'Thailand' },
	{ name: 'Pak Kret', timezone: 7, country: 'Thailand' },
	{ name: 'Hat Yai', timezone: 7, country: 'Thailand' },
	{ name: 'Chiang Mai', timezone: 7, country: 'Thailand' },

	// Laos
	{ name: 'Vientiane', timezone: 7, country: 'Laos' },

	// Cambodia
	{ name: 'Phnom Penh', timezone: 7, country: 'Cambodia' },

	// Vietnam
	{ name: 'Ho Chi Minh City', timezone: 7, country: 'Vietnam' },
	{ name: 'Hanoi', timezone: 7, country: 'Vietnam' },
	{ name: 'Haiphong', timezone: 7, country: 'Vietnam' },
	{ name: 'Can Tho', timezone: 7, country: 'Vietnam' },
	{ name: 'Da Nang', timezone: 7, country: 'Vietnam' },

	// Malaysia
	{ name: 'Kuala Lumpur', timezone: 8, country: 'Malaysia' },
	{ name: 'George Town', timezone: 8, country: 'Malaysia' },
	{ name: 'Ipoh', timezone: 8, country: 'Malaysia' },
	{ name: 'Shah Alam', timezone: 8, country: 'Malaysia' },
	{ name: 'Petaling Jaya', timezone: 8, country: 'Malaysia' },
	{ name: 'Johor Bahru', timezone: 8, country: 'Malaysia' },

	// Singapore
	{ name: 'Singapore', timezone: 8, country: 'Singapore' },

	// Brunei
	{ name: 'Bandar Seri Begawan', timezone: 8, country: 'Brunei' },

	// Indonesia
	{ name: 'Jakarta', timezone: 7, country: 'Indonesia' },
	{ name: 'Surabaya', timezone: 7, country: 'Indonesia' },
	{ name: 'Bandung', timezone: 7, country: 'Indonesia' },
	{ name: 'Medan', timezone: 7, country: 'Indonesia' },
	{ name: 'Bekasi', timezone: 7, country: 'Indonesia' },
	{ name: 'Palembang', timezone: 7, country: 'Indonesia' },
	{ name: 'Tangerang', timezone: 7, country: 'Indonesia' },
	{ name: 'Makassar', timezone: 8, country: 'Indonesia' },
	{ name: 'South Tangerang', timezone: 7, country: 'Indonesia' },
	{ name: 'Batam', timezone: 7, country: 'Indonesia' },
	{ name: 'Bogor', timezone: 7, country: 'Indonesia' },
	{ name: 'Pekanbaru', timezone: 7, country: 'Indonesia' },
	{ name: 'Bandar Lampung', timezone: 7, country: 'Indonesia' },
	{ name: 'Padang', timezone: 7, country: 'Indonesia' },
	{ name: 'Malang', timezone: 7, country: 'Indonesia' },
	{ name: 'Denpasar', timezone: 8, country: 'Indonesia' },

	// Philippines
	{ name: 'Manila', timezone: 8, country: 'Philippines' },
	{ name: 'Quezon City', timezone: 8, country: 'Philippines' },
	{ name: 'Caloocan', timezone: 8, country: 'Philippines' },
	{ name: 'Davao City', timezone: 8, country: 'Philippines' },
	{ name: 'Cebu City', timezone: 8, country: 'Philippines' },
	{ name: 'Zamboanga City', timezone: 8, country: 'Philippines' },
	{ name: 'Antipolo', timezone: 8, country: 'Philippines' },
	{ name: 'Pasig', timezone: 8, country: 'Philippines' },
	{ name: 'Taguig', timezone: 8, country: 'Philippines' },
	{ name: 'Valenzuela', timezone: 8, country: 'Philippines' },

	// East Timor
	{ name: 'Dili', timezone: 9, country: 'East Timor' },

	// Australia
	{ name: 'Sydney', timezone: 10, country: 'Australia' },
	{ name: 'Melbourne', timezone: 10, country: 'Australia' },
	{ name: 'Brisbane', timezone: 10, country: 'Australia' },
	{ name: 'Perth', timezone: 8, country: 'Australia' },
	{ name: 'Adelaide', timezone: 9.5, country: 'Australia' },
	{ name: 'Gold Coast', timezone: 10, country: 'Australia' },
	{ name: 'Canberra', timezone: 10, country: 'Australia' },
	{ name: 'Newcastle', timezone: 10, country: 'Australia' },
	{ name: 'Wollongong', timezone: 10, country: 'Australia' },
	{ name: 'Logan City', timezone: 10, country: 'Australia' },
	{ name: 'Geelong', timezone: 10, country: 'Australia' },
	{ name: 'Hobart', timezone: 10, country: 'Australia' },
	{ name: 'Townsville', timezone: 10, country: 'Australia' },
	{ name: 'Cairns', timezone: 10, country: 'Australia' },
	{ name: 'Darwin', timezone: 9.5, country: 'Australia' },

	// New Zealand
	{ name: 'Auckland', timezone: 12, country: 'New Zealand' },
];

// Default cities that appear when the app first loads
export const DEFAULT_CITIES = [
	{ name: 'Sydney', timezone: 10, country: 'Australia' },
	{ name: 'Beijing', timezone: 8, country: 'China' },
	{ name: 'London', timezone: 0, country: 'UK' },
	{ name: 'New York', timezone: -5, country: 'USA' },
];

// Generate unique ID for each city clock
export const generateClockId = (cityName) => {
	return `${cityName.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}`;
};
