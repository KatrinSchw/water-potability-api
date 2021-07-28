def build_samples():
    samples = []
    file = open("./data/water_potability.csv", 'r')
    lines = file.readlines()
    categories = ['_id', *[category if category != "Potability\n" else "Potability" for category in lines.pop(0).split(',')]]
    print(categories)

    for n in range(len(lines)):
        row = [n, *[float(val) if val else None for val in lines[n].split(',')]]
        samples.append({categories[i]: row[i] for i in range(len(categories))})

    return samples


if __name__ == "__main__":
    build_samples()
