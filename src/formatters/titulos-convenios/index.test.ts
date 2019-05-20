import format, { LENGTH } from '.';

describe('Títulos Convênios Formatter', () => {
  test('should format Títulos Convênios with mask', () => {
    expect(format('')).toBe('');
    expect(format('8')).toBe('8');
    expect(format('83')).toBe('83');
    expect(format('836')).toBe('836');
    expect(format('8364')).toBe('8364');
    expect(format('83640')).toBe('83640');
    expect(format('836400')).toBe('836400');
    expect(format('8364000')).toBe('8364000');
    expect(format('83640000')).toBe('83640000');
    expect(format('836400001')).toBe('836400001');
    expect(format('8364000017')).toBe('8364000017');
    expect(format('83640000178')).toBe('83640000178');
    expect(format('836400001787')).toBe('836400001787');
    expect(format('8364000017873')).toBe('836400001787.3');
    expect(format('83640000178733')).toBe('836400001787.33');
    expect(format('836400001787335')).toBe('836400001787.335');
    expect(format('8364000017873356')).toBe('836400001787.3356');
    expect(format('83640000178733560')).toBe('836400001787.33560');
    expect(format('836400001787335600')).toBe('836400001787.335600');
    expect(format('8364000017873356004')).toBe('836400001787.3356004');
    expect(format('83640000178733560045')).toBe('836400001787.33560045');
    expect(format('836400001787335600450')).toBe('836400001787.335600450');
    expect(format('8364000017873356004500')).toBe('836400001787.3356004500');
    expect(format('83640000178733560045000')).toBe('836400001787.33560045000');
    expect(format('836400001787335600450001')).toBe(
      '836400001787.335600450001'
    );
    expect(format('8364000017873356004500010')).toBe(
      '836400001787.335600450001.0'
    );
    expect(format('83640000178733560045000100')).toBe(
      '836400001787.335600450001.00'
    );
    expect(format('836400001787335600450001000')).toBe(
      '836400001787.335600450001.000'
    );
    expect(format('8364000017873356004500010000')).toBe(
      '836400001787.335600450001.0000'
    );
    expect(format('83640000178733560045000100000')).toBe(
      '836400001787.335600450001.00000'
    );
    expect(format('836400001787335600450001000000')).toBe(
      '836400001787.335600450001.000000'
    );
    expect(format('8364000017873356004500010000000')).toBe(
      '836400001787.335600450001.0000000'
    );
    expect(format('83640000178733560045000100000000')).toBe(
      '836400001787.335600450001.00000000'
    );
    expect(format('836400001787335600450001000000002')).toBe(
      '836400001787.335600450001.000000002'
    );
    expect(format('8364000017873356004500010000000025')).toBe(
      '836400001787.335600450001.0000000025'
    );
    expect(format('83640000178733560045000100000000250')).toBe(
      '836400001787.335600450001.00000000250'
    );
    expect(format('836400001787335600450001000000002501')).toBe(
      '836400001787.335600450001.000000002501'
    );
    expect(format('8364000017873356004500010000000025015')).toBe(
      '836400001787.335600450001.000000002501.5'
    );
    expect(format('83640000178733560045000100000000250151')).toBe(
      '836400001787.335600450001.000000002501.51'
    );
    expect(format('836400001787335600450001000000002501510')).toBe(
      '836400001787.335600450001.000000002501.510'
    );
    expect(format('8364000017873356004500010000000025015100')).toBe(
      '836400001787.335600450001.000000002501.5100'
    );
    expect(format('83640000178733560045000100000000250151000')).toBe(
      '836400001787.335600450001.000000002501.51000'
    );
    expect(format('836400001787335600450001000000002501510006')).toBe(
      '836400001787.335600450001.000000002501.510006'
    );
    expect(format('8364000017873356004500010000000025015100061')).toBe(
      '836400001787.335600450001.000000002501.5100061'
    );
    expect(format('83640000178733560045000100000000250151000615')).toBe(
      '836400001787.335600450001.000000002501.51000615'
    );
    expect(format('836400001787335600450001000000002501510006150')).toBe(
      '836400001787.335600450001.000000002501.510006150'
    );
    expect(format('8364000017873356004500010000000025015100061501')).toBe(
      '836400001787.335600450001.000000002501.5100061501'
    );
    expect(format('83640000178733560045000100000000250151000615015')).toBe(
      '836400001787.335600450001.000000002501.51000615015'
    );
    expect(format('836400001787335600450001000000002501510006150153')).toBe(
      '836400001787.335600450001.000000002501.510006150153'
    );
  });

  test(`shouldn't add digits after the Títulos Convênios length (${LENGTH})`, () => {
    expect(
      format('8364000017873356004500010000000025015100061501531231231')
    ).toBe('836400001787.335600450001.000000002501.510006150153');
  });

  test('should remove all non numeric characters', () => {
    expect(
      format('836400001787?.335600450001ABC.000000002501A.5100061?50153')
    ).toBe('836400001787.335600450001.000000002501.510006150153');
  });
});